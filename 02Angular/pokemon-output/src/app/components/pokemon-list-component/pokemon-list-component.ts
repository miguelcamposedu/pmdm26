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

  openPokemonModal(id: string) {
        console.log('Pokemon id recibido: '+id);
    this.pokemonService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(PokemonModal);
		modalRef.componentInstance.name = resp.name;
    });
  }
}
