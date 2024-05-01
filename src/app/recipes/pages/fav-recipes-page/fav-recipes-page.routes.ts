import { Routes } from '@angular/router';

import { recipePageRoutes } from '../recipe-page';

export const favRecipesPageRoutes: Routes = [
  { 
    path: 'recipe',
    loadComponent: () => import('../recipe-page').then(edit => edit.RecipePageModule),
    children: [ ...recipePageRoutes ],
    data: {
      redirect: "recipes/fav-recipes"
    }
  },
];
