import { Component, inject, OnInit } from '@angular/core';
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
  episodeList: Episode[] = [];

  ngOnInit(): void {
    this.episodeService.getAllEpisodes().subscribe(resp => {
      this.episodeList = resp.results;
    });
  }
}
