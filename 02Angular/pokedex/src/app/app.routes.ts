import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { BerriesList } from './components/berries-list/berries-list';

export const routes: Routes = [
    {path: 'berries-list', component: BerriesList},
    {path: 'pokemon-list', component: PokemonList},
    {path: '', pathMatch: 'full', redirectTo: '/pokemon-list' },
    {path: '**', component: NotFoundPage },
];
