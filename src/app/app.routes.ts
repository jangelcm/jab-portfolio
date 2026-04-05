import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then((m) => m.routes),
        title: 'JAB Digital Studio'
    },
    {
        path: '**',
        redirectTo: '',
    },
];
