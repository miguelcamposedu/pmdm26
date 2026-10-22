import { Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';
import { NotFound } from './pages/not-found/not-found';
import { EpisodeDetail } from './components/episode-detail/episode-detail';

export const routes: Routes = [
    {path: 'episode-list', component: EpisodeListComponent},
    {path: 'episode-detail/:id', component: EpisodeDetail},
    {path: '', redirectTo: '/episode-list', pathMatch: 'full'},
      {path: '**', component: NotFound},

];
