import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { RecipesState } from '@recipes/recipes/state';
import { Create, Update } from '@recipes/recipes/state/recipes.actions';
import { IRecipe, Prop, Style } from '@recipes/recipes/models';
import { FormUtilsModule, IListItem } from '@recipes/shared/form-utils';
import { EditHeaderModule } from '@recipes/shared/components';
import { UtilsModule } from '@recipes/shared/utils';

import { ValidatorsModule } from '../../validators';

@Component({
  selector: 'edit-recipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormUtilsModule,
    EditHeaderModule,
    ValidatorsModule,
    UtilsModule,
  ],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
  @Select(RecipesState.error) error$: Observable<HttpErrorResponse>;
  
  recipe$: Observable<IRecipe> = this.store.select(RecipesState.recipeById(this.recipeId));

  styles: IListItem[] = [
    {
      value: Style.Baking,
      placeholder: Style.Baking,
    },
    {
      value: Style.Frying,
      placeholder: Style.Frying,
    },
    {
      value: Style.Roasting,
      placeholder: Style.Roasting,
    },
    {
      value: Style.Sautee,
      placeholder: Style.Sautee,
    },
  ]

  constructor(
    private store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  get recipeId(): string {
    return this.activatedRoute.snapshot.paramMap.get("id")!;
  }

  submit(recipe: IRecipe): void {
    recipe.id ? this.update(recipe) : this.create(recipe); 
  }

  update(recipe: IRecipe): void {
    this.store.dispatch(new Update({ recipe: { ...recipe } }));
  }

  create(recipe: IRecipe): void {
    this.store.dispatch(new Create({ recipe: { ...recipe } }));
  }

  add(recipe: IRecipe, prop: Prop): void {
    recipe[prop].push('');
  }

  remove(recipe: IRecipe, index: number, prop: Prop): void {
    recipe[prop].splice(index, 1);
  }

  trackByFn(index: number): number {
    return index;  
  }
}
