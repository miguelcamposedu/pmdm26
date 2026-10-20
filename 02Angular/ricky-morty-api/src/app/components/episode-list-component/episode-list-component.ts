import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {

  episodeService = inject(EpisodeService);
  // ATENCIÓN DECLARAMOS LA VARIABLE DE TIPO SIGNAL
  episodeList = signal<Episode[]>([]);

  ngOnInit(): void {
    this.episodeService.getAllEpisodes().subscribe(resp => {
      // Y AQUÍ SETEAMOS UN NUEVO VALOR DEL SIGNAL
      this.episodeList.set(resp.results);
    });
  }
}
