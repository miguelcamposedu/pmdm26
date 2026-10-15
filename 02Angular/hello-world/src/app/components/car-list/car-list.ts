import { Component } from '@angular/core';
import { CarItem } from '../car-item/car-item';
 const CARS: Car[] = [
	{
		brand: 'VW',
		model: 'Polo',
		doors: 5,
    cv: 125,
    color: 'red',
    urlPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/2018_Volkswagen_Polo_SE_1.0_Front.jpg/1280px-2018_Volkswagen_Polo_SE_1.0_Front.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
	},
	{
		brand: 'VW',
		model: 'Golf GT',
		doors: 5,
    cv: 180,
    color: 'blue',
    urlPhoto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/2018_Volkswagen_Polo_SE_1.0_Front.jpg/1280px-2018_Volkswagen_Polo_SE_1.0_Front.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
	}];

@Component({
  imports: [CarItem],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})
export class CarList {

  title = 'CAR LIST ...';
  titleColor = 'title-danger';
  carList = CARS;

  changeColorTitle() {
    if(this.titleColor == 'title-danger') {
      this.titleColor = 'title-success';
    } else {
      this.titleColor = 'title-danger';
    }
  }
}
