import { Routes } from '@angular/router';

import { authRoutes } from '@recipes/auth/auth.routes';
import { recipesRoutes } from '@recipes/recipes/recipes.routes';

export const coreRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  { 
    path: 'recipes',
    loadComponent: () => import('../recipes/recipes-root.component').then(recipes => recipes.RecipesRootComponent),
    children: [ ...recipesRoutes ]
  },
  { 
    path: 'auth',
    loadComponent: () => import('../auth/auth.root.component').then(auth => auth.AuthRootComponent),
    children: [ ...authRoutes ]
  },
];
