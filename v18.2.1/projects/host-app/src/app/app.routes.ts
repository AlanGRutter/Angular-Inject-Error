import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const HOST_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full'
    },
    {
        path: 'remote',
        loadChildren: () => 
            loadRemoteModule('remote', './Routes').then(m => m.REMOTE_ROUTES),
    },

    // DO NOT insert routes after the one below
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
