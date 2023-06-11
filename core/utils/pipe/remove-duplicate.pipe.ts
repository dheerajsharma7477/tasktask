import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate'
})
export class RemoveDuplicatePipe implements PipeTransform {
    transform(value: any[]): any[] {
      if (!Array.isArray(value)) {
        return value;
      }

      return value.filter((item, index, self) => {
        return self.indexOf(item) === index;
      });
    }
}