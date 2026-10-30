import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon-list-response';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response';

// STEP4: crear el servicio que hará la petición sobre Pokemon
@Service()
export class PokemonService {
    http = inject(HttpClient);

    getAll():  Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
    }

    // STEP4: declaro, mi servicio, un nuevo método que me obtiene la información 
    // de un Pokémon a partir del ID de ese Pokémon.

    getOne(id: string):  Observable<PokemonDetailResponse> {
        return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
}
