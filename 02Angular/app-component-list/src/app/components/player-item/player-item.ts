import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-player-item',
  styleUrl: './player-item.css',
  templateUrl: './player-item.html',
})
export class PlayerItem {
  // Parámetro de entrada al componente
  player = input<Player>();
}
