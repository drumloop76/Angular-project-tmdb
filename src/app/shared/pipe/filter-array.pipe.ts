import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(array: any, propName: string): any {
    const newArr = array ? array.filter((arr: any) => arr.job === propName) : [];

    if(newArr) return newArr

    return null
  }
}
