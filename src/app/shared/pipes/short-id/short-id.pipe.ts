import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortId'
})
export class ShortIdPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 6) {
      return value.substring(0, 3) + '...' + value.substring(value.length - 3, value.length);
    }
    return value;
  }

}
