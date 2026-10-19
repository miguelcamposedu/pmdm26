import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon-list-response';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';

// STEP2: generación de components ng g c components/....
@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent {
  // STEP5: declaración la inyección de dependencia, es decir, la dependencia que 
  // tengo de utilizar en este componente el PokemonService.
  pokemonService = inject(PokemonService);
  pokemonList: Pokemon[] = [];

  // STEP6: declaración del método que invoca la petición del servicio.
  loadPokemonList() {
    this.pokemonService.getAll().subscribe(resp => {
      console.log(resp);
      this.pokemonList = resp.results;
    });
  }
}
