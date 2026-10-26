import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon-list-response';
import { PokemonItem } from '../pokemon-item/pokemon-item';

@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList implements OnInit {
    private pokemonService = inject(PokemonService);
    pokemonList = signal<Pokemon[]>([]); 

    ngOnInit(): void {
      this.pokemonService.getAllPokemons().subscribe(resp => {
        this.pokemonList.set(resp.results);
      });
    }
}
