import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, city: string): unknown {
    return value.sort((a, b) => {
      if (a[city] > b[city]){
        return 1;
      }else {
        return -1;
      }
    });
  }

}
