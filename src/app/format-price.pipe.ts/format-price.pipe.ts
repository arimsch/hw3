import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number, args?: string): string {
    let defaultCourse = '$';
    if (!args) {
      return `${value}${defaultCourse}`;
    } else {
      return `${value}${args}`;
    }
  }
}
