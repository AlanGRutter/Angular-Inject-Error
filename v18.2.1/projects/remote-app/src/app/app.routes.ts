import { Routes } from '@angular/router';

export const REMOTE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full' 
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./feature/dashboard/dashboard.component').then(m => m.DashboardComponent)
    }
];
