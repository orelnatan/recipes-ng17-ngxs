import { Routes } from '@angular/router';

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
];
