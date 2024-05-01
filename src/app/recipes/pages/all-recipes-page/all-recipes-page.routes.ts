import { Routes } from '@angular/router';

import { recipePageRoutes } from '../recipe-page';

export const allRecipesPageRoutes: Routes = [
  { 
    path: 'recipe',
    loadComponent: () => import('../recipe-page').then(edit => edit.RecipePageModule),
    children: [ ...recipePageRoutes ],
    data: {
      redirect: "recipes/all-recipes"
    }
  },
];
