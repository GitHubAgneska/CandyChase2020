import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';

// * https://angular.io/guide/dependency-injection-in-action#supply-a-custom-provider-with-inject
// There are times when the dependency we define is either a primitive, object, or function. 
// In such a scenario, the class token cannot be used as there is no class. 
// Angular solves this problem using InjectionToken 

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage');
factory: () => localStorage ;
// The factory function returns the localStorage property that is 
// attached to the browser window object.

// original syntax ( issue ): 
/* export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
}); */

@Injectable()
export class BrowserStorageService {

  // The Inject decorator is a constructor parameter used to specify a custom provider 
  // of a dependency. This custom provider can now be overridden during testing 
  // with a mock API of localStorage instead of interacting with real browser APIs.
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage, public http: HttpClient) {}


  get(key: string) {
    this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
