import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../services/episode-service';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';

@Component({
  imports: [],
  selector: 'app-episode-detail',
  styleUrl: './episode-detail.css',
  templateUrl: './episode-detail.html',
})
export class EpisodeDetail {
  private episodeService = inject(EpisodeService);
  private route = inject(ActivatedRoute);
  episodeId = '';
  episode = signal<EpisodeDetailResponse | undefined>(undefined);

  constructor() {
    // Access query parameters reactively
    this.route.params.subscribe((params) => {
      this.episodeId = params['id'];
        this.episodeService.getOneEpisode(this.episodeId).subscribe(resp => {
          this.episode.set(resp);
          console.log(resp);
        });
    });
  }

}
