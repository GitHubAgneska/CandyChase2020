import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore',
  pure: true
})
export class RemoveUnderscorePipe implements PipeTransform {

  transform(value: string) {
    for ( let i = 0; i < value.length; i++ ) {
      if ( value[i] === "_" ) {
       // value[i] = " ";
        value = " placeholder value";
      }
    }
    return value;
  }
}
