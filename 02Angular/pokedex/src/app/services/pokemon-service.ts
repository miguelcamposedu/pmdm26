import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon-list-response';
import { Observable } from 'rxjs';

@Service()
export class PokemonService {
     private http = inject(HttpClient);

     getAllPokemons(): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
     }

     getOnePokemon(id: string) {

     }
}
