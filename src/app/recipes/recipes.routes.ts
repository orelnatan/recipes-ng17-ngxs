import { Routes } from '@angular/router';

import { allRecipesPageRoutes } from './pages/all-recipes-page';
import { favRecipesPageRoutes } from './pages/fav-recipes-page';

export const recipesRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'all-recipes',
    pathMatch: 'full'
  },
  { 
    path: 'all-recipes',
    loadComponent: () => import('./pages').then(all => all.AllRecipesPageModule),
    children: [ ...allRecipesPageRoutes ]
  },
  { 
    path: 'fav-recipes',
    loadComponent: () => import('./pages').then(fav => fav.FavRecipesPageModule),
    children: [ ...favRecipesPageRoutes ]
  }
];
