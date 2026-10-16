import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-car-item',
  styleUrl: './car-item.css',
  templateUrl: './car-item.html',
})
export class CarItem {
  car = input<Car>();
}
