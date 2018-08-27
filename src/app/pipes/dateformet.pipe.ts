import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateformet'
})
export class DateformetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
