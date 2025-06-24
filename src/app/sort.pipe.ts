import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    value: string[] | number[],
    order: 'asc' | 'desc' = 'asc'
  ): string[] | number[] {
    if (!Array.isArray(value)) {
      return value;
    }
    if (typeof value[0] === 'string') {
      const sorted = [...(value as string[])].sort((a, b) => (a > b ? 1 : -1));
      return order === 'desc' ? ([...sorted].reverse() as string[]) : sorted;
    } else {
      const sorted = [...(value as number[])].sort(
        (a, b) => (a as number) - (b as number)
      );
      return order === 'desc' ? ([...sorted].reverse() as number[]) : sorted;
    }
  }
}
