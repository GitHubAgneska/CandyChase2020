import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @ USE
// Logic for parsing error messages and stack traces from the server and client
@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient) {}

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
        return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
      return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
      return error.message;
  }

  getServerStack(error: HttpErrorResponse): string {
      // handle stack trace
      return 'stack';
  }
  
}
