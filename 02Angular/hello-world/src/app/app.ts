import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { CarItem } from './components/car-item/car-item';
import { MotorbikeItem } from './components/motorbike-item/motorbike-item';
import { CarList } from './components/car-list/car-list';

@Component({
  imports: [RouterOutlet, Toolbar, CarItem, MotorbikeItem, CarList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hello-world');
}
