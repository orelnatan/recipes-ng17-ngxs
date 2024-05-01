import { Routes } from '@angular/router';

export const recipePageRoutes: Routes = [
  { 
    path: 'view/:id',
    loadComponent: () => import('./components').then(view => view.ViewRecipeModule),
  },
  { 
    path: 'create',
    loadComponent: () => import('./components').then(create => create.EditRecipeModule)
  },
  { 
    path: 'update/:id',
    loadComponent: () => import('./components').then(update => update.EditRecipeModule)
  },
];
