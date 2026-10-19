import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';

// STEP2: generación de components ng g c components/....
@Component({
  imports: [],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent {
  // STEP5: declaración la inyección de dependencia, es decir, la dependencia que 
  // tengo de utilizar en este componente el PokemonService.
  pokemonService = inject(PokemonService);

  
}
