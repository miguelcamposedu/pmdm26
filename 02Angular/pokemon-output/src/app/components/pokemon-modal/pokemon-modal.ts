import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail-response';

@Component({
  imports: [],
  selector: 'app-pokemon-modal',
  styleUrl: './pokemon-modal.css',
  templateUrl: './pokemon-modal.html',
})
export class PokemonModal {
  // STEP11: hemos declarado un componente para el modal que se va a abrir cuando pulse en el detalle de un Pokémon
  // para poder hacer uso de la clase que controlan los modales en angular bootstrap, tengo que declarar mediante inyección de dependencia la siguiente variable.
  activeModal = inject(NgbActiveModal);

  // Además declaro como parámetro de entrada al modal el objeto PokemonDetailResponse
  @Input() pokemonDetail: PokemonDetailResponse | undefined;
}
