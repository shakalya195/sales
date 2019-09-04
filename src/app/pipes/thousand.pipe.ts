import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var exp, rounded, suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];
      if(isNaN(input) || input == null) {
        return 'NA';
      }
      if(input < 1000) {
        return input;
      }
      exp = Math.floor(Math.log(input) / Math.log(1000));
      return (input / Math.pow(1000, exp)).toFixed(0) + suffixes[exp - 1];
  }
}
