import { Component, input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-list-response';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-item',
  styleUrl: './pokemon-item.css',
  templateUrl: './pokemon-item.html',
})
export class PokemonItem {

  pokemon = input<Pokemon | undefined>();

  getId() {
    return this.pokemon()?.url.split("/")[6];
  }
}
