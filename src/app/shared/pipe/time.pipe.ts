import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(minutes: number) {
    let hours = Math.floor(minutes / 60);
    let mins = Math.floor(minutes % 60);
    return `${hours ? hours + 'h' : ''} ${mins}min`;
  } 

}
