import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: '°C' | '°F'): string {
    if (unit === '°C') {
      return `${value.toFixed(2)} °C`;
    } else if (unit === '°F') {
      return `${((value * 9) / 5 + 32).toFixed(2)} °F`;
    }
    return `${value.toFixed(2)} °K`; // Default to Kelvin if no unit is specified
  }
}
