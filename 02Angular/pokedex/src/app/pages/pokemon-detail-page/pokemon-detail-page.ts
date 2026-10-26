import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonDetailResponse, Type2 } from '../../interfaces/pokemon-detail-response';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-pokemon-detail-page',
  styleUrl: './pokemon-detail-page.css',
  templateUrl: './pokemon-detail-page.html',
})
export class PokemonDetailPage {

    private route = inject(ActivatedRoute);
    private pokemonService = inject(PokemonService);
    private pokemonId = '';
    private pokemonInfo = signal<PokemonDetailResponse | undefined>(undefined);

    constructor() {
    this.route.params.subscribe((params) => {
      this.pokemonId = params['pokid'];
      this.pokemonService.getOnePokemon(this.pokemonId).subscribe(resp => {
        this.pokemonInfo.set(resp);
      });
    });  
      
  }
  getTypeClass(type: string) {
return `bg-type-${type}`;
}
}
