import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  pokemon = input<Pokemon>();

  constructor() {
    console.log(this.pokemon);
    debugger;
  }
}
