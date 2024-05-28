import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LayoutModule } from '@recipes/shared/layout';
import { RecipesState } from '@recipes/recipes/state';
import { RecipeCardModule } from '@recipes/recipes/components';
import { ElementsGridModule } from '@recipes/shared/components';
import { IRecipe } from '@recipes/recipes/models';

@Component({
  selector: 'fav-recipes-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    RecipeCardModule,
    ElementsGridModule
  ],
  templateUrl: './fav-recipes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavRecipesPageComponent {
  @Select(RecipesState.favRecipes) recipes$: Observable<IRecipe[]>;
  @Select(RecipesState.loading) loading$: Observable<boolean>;
  @Select(RecipesState.error) error$: Observable<HttpErrorResponse>;
}
