import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [],
  selector: 'app-pokemon-item',
  styleUrl: './pokemon-item.css',
  templateUrl: './pokemon-item.html',
})
export class PokemonItem {
  pokemon = input<Pokemon | undefined>();
}
