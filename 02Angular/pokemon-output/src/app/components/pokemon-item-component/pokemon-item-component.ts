import { Component, input, output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  // STEP5: declaramos el componente que dibuja en la interfaz de usuario un Pokémon a partir del "pokemon" que recibe como input
  pokemon = input<Pokemon>();

  // STEP6: declaramos también una propiedad de tipo output que nos va a permitir lanzar un evento personalizado, es decir, custom para detectar en el componente padre cuando se ha hecho clic en el Pokémon
  pokemonClicked = output<string>();
  id: string = '';

  getPokemonId() {
    this.id = this.pokemon()?.url.split("/")[6]!;
    return this.id;
  }

  // STEP8: defino el evento que gestiona haber hecho clic sobre el componente Pokémon en este componente Hijo
  // y este evento, lo que tiene que hacer es emitir un nuevo valor por el output.  
  emitPokemonClicked() {
    const id = this.getPokemonId();
    this.pokemonClicked.emit(id);
  }
}
