import { Component } from '@angular/core';
import { PlayerItem } from '../player-item/player-item';

const PLAYERS: Player[] =[
  {id: 1,
    fullName: "Cristiano",
    photoUrl: "https://media.tycsports.com/files/2026/10/12/995292/cristiano-ronaldo_640x640.webp",
    age: 42
  },
  {
    id: 2,
    fullName: "Messi",
    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Wd834hC7niKvzCaSchyJfQHcy3bklaNlB4frH_Mx1CMRq8dhVf8BhDBq&s=10",
    age: 36
  },
];

@Component({
  imports: [PlayerItem],
  selector: 'app-player-list',
  styleUrl: './player-list.css',
  templateUrl: './player-list.html',
})
export class PlayerList {
  playerList = PLAYERS;
}
