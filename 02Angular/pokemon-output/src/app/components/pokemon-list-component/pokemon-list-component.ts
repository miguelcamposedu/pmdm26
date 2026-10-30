import { Component, inject, Input, OnInit, signal, TemplateRef } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon-list-response';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail-response';
import { PokemonModal } from '../pokemon-modal/pokemon-modal';

// STEP2: generación de components ng g c components/....
@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {

  pokemonService = inject(PokemonService);
  pokemonList = signal<Pokemon[]>([]);
  private modalService = inject(NgbModal);

    ngOnInit(): void {
   this.pokemonService.getAll().subscribe(resp => {
      this.pokemonList.set(resp.results);
    });
  }

  // STEP10: en este método voy a recibir el ID del Pokémon, que me ha enviado por el output el componente Hijo
  // y voy a abrir un modal con la información de ese Pokémon
  openPokemonModal(id: string) {
    // definimos la llamada al servicio PokemonService, que me devuelve la información de un Pokémon a partir de su IDE
    this.pokemonService.getOne(id).subscribe(resp => {

      // STEP12: abro el modal que está declarado en el componente PokewmonModal y le paso la información del detalle que he recibido de la API
          const modalRef = this.modalService.open(PokemonModal);
		      modalRef.componentInstance.pokemonDetail = resp;
    });

  }
}
