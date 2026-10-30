import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';

export const routes: Routes = [
    // STEP1: he creado los componentes y a continuación las rutas que navegan a esos componentes
    // en este caso solo tenemos una página que es la de Pokémon List
    {path: 'pokemon-list', component: PokemonListComponent},
    {path: '', pathMatch: 'full', redirectTo: '/pokemon-list'}
];
