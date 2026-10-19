import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon-list-response';
import { Observable } from 'rxjs';

// STEP4: crear el servicio que hará la petición sobre Pokemon
@Service()
export class PokemonService {
    http = inject(HttpClient);

    getAll():  Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
    }
}
