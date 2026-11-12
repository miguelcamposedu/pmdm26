import { Routes } from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { PageNewPost } from './pages/page-new-post/page-new-post';

export const routes: Routes = [
    { path: 'new-post', component: PageNewPost },
    { path: '', pathMatch: 'full', redirectTo: '/new-post' },
    { path: '**', component: PageNotFound },
];
