import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { BerriesList } from './components/berries-list/berries-list';
import { HomePage } from './pages/home-page/home-page';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page';

export const routes: Routes = [
    {path: 'berries-list', component: BerriesList},
    {path: 'pokemon-list', component: PokemonList},
    {path: 'pokemon-detail/:pokid', component: PokemonDetailPage},
    {path: '', pathMatch: 'full', component: HomePage },
    {path: '**', component: NotFoundPage },
];
