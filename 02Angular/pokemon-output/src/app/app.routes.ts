import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';

export const routes: Routes = [
    {path: 'pokemon-list', component: PokemonListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/pokemon-list'}
];
