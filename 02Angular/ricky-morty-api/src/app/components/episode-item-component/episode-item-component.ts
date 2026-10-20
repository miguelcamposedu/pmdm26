import { Component, input, OnInit } from '@angular/core';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent implements OnInit{
  episode = input<Episode>();

  ngOnInit(): void {
    console.log(this.episode);
    debugger;
  }
}
