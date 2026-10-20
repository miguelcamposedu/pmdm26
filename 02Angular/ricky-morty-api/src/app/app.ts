import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';

@Component({
  imports: [RouterOutlet, EpisodeListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ricky-morty-api');
}
