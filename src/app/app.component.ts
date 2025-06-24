import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, TemperaturePipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperatures = [
    { city: 'Berlin', temperature: 4.2749812 },
    { city: 'New York', temperature: 18.1214 },
    { city: 'Paris', temperature: 72.1209001 },
    { city: 'Chicago', temperature: 65.0775238 },
    { city: 'Tokyo', temperature: 20.1234567 },
    { city: 'London', temperature: 15.9876543 },
    { city: 'Sydney', temperature: 30.456789 },
    { city: 'Moscow', temperature: -5.1234567 },
    { city: 'Cape Town', temperature: 22.3456789 },
    { city: 'Rio de Janeiro', temperature: 28.9876543 },
    { city: 'Beijing', temperature: 10.1234567 },
    { city: 'Cairo', temperature: 35.456789 },
    { city: 'Mumbai', temperature: 30.1234567 },
    { city: 'Seoul', temperature: 15.9876543 },
    { city: 'Mexico City', temperature: 20.456789 },
    { city: 'Buenos Aires', temperature: 18.1234567 },
    { city: 'Jakarta', temperature: 25.456789 },
    { city: 'Istanbul', temperature: 22.9876543 },
    { city: 'Bangkok', temperature: 30.1234567 },
  ];

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}
