import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router, Event as RouterNavigationEvent } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { Select, Store } from '@ngxs/store';
import { Observable, startWith } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RecipesState } from '@recipes/recipes/state';
import { Update } from '@recipes/recipes/state/recipes.actions';
import { FormUtilsModule } from '@recipes/shared/form-utils';
import { IRecipe } from '@recipes/recipes/models';

import { RecipeHeaderModule } from '../recipe-header';

@UntilDestroy()
@Component({
  selector: 'view-recipe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    MatChipsModule,
    RecipeHeaderModule,
    FormUtilsModule,
  ],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.scss'
})
export class ViewRecipeComponent {
  @Select(RecipesState.error) error$: Observable<HttpErrorResponse>;
  
  recipe$: Observable<IRecipe>;

  constructor(
    private store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.router.events.pipe(
      untilDestroyed(this),
      startWith(new NavigationEnd(0, "", ""))
    )
    .subscribe((event: RouterNavigationEvent): void => {
      if(event instanceof NavigationEnd) {
        this.recipe$ = this.store.select(RecipesState.recipeById(this.recipeId));
      }
    })
  }
  
  get recipeId(): string {
    return this.activatedRoute.snapshot.paramMap.get("id")!;
  }

  update(): void {
    this.router.navigate(["../../", "update", this.recipeId], {
      relativeTo: this.activatedRoute
    })
  }

  like(recipe: IRecipe): void {
    this.store.dispatch(new Update({ 
      recipe: {
        ...recipe,
        favorite: !recipe.favorite
      }
    }));
  }
}
