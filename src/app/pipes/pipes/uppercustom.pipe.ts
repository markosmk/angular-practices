import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercustom',
})
export class UppercustomPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (args.length && args[0]) {
      return value.slice(0, 4);
    }

    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return null;
  }
}
