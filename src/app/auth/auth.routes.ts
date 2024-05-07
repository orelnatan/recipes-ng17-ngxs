import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  { 
    path: 'registration',
    loadComponent: () => import('./pages').then(registration => registration.RegistrationPageModule),
  },
];
