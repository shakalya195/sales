import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(time: any, format?: any): any {
    if(!time)
    return null;

    if(!format)
    return null;
    
    let day = moment(time);

    if(format == 'fromNow'){
      return day.fromNow();
    }

    if(format){
      return day.format(format);
    }

  }

}
