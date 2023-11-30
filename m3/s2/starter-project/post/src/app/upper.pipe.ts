import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(testo:string): unknown {
    return testo.toUpperCase();
  }

}
