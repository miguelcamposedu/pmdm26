import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon-list-response';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response';

@Service()
export class PokemonService {
     private http = inject(HttpClient);

     getAllPokemons(): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
     }

     getOnePokemon(id: string): Observable<PokemonDetailResponse> {
        return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
     }
}
