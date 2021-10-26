import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname',
})
export class SortnamePipe implements PipeTransform {
  transform(value: Array<any>, ...args: any[]): any {
    return value.sort((a, b) => {
      const x = a.title.toLowerCase();
      const y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });
  }
}
