import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'buckit',
        loadComponent: () => import('./pages/buckit/buckit.component').then(m => m.BuckitComponent)
    },
    {
        path: 'buckit/privacy-policy',
        loadComponent: () => import('./pages/buckit/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
