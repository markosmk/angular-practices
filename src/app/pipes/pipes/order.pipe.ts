import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heroes: any[], orderBy: string = ''): any[] {
    if (!orderBy) {
      return heroes;
    }
    // return [];
    return [...heroes].sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));
    // return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
