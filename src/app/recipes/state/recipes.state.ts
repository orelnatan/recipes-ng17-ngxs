import { Injectable, NgZone, TemplateRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router, RouterOutlet } from "@angular/router";
import { Action, NgxsOnInit, Selector, State, StateContext, createSelector } from "@ngxs/store";
import { catchError, of, tap } from "rxjs";

import { RedirectService } from "@recipes/shared/redirect";

import { RecipesService } from "../services";
import { RecipesStateModel } from "./recipes-state.model";
import { Create, Edit, Failure, FetchAll, Update } from "./recipes.actions";
import { IRecipe } from "../models";

// https://www.npmjs.com/package/lodash.clonedeep
var cloneDeep = require('lodash.clonedeep');

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    recipes: null,
    recipe: null,
    template: null,
    loading: false,
    sidenav: false,
    error: null,
  }
})
@Injectable()
export class RecipesState implements NgxsOnInit {
  constructor(
    private readonly ngZone: NgZone,
    private readonly router: Router,
    private readonly recipesService: RecipesService,
    private readonly redirectService: RedirectService,
  ) {}

  ngxsOnInit(ctx: StateContext<RecipesStateModel>): void {
    ctx.dispatch(new FetchAll());
  }

  @Selector()
  static allRecipes(state: RecipesStateModel): IRecipe[] {
    return state.recipes!;
  }

  @Selector()
  static favRecipes(state: RecipesStateModel): IRecipe[] {
    return state.recipes?.filter(recipe => recipe.favorite)!;
  }

  static recipeById(id: string): (state: RecipesStateModel) => IRecipe {
    return createSelector(
      [RecipesState], (state: RecipesStateModel): IRecipe => {

      return cloneDeep(state.recipes?.find(recipe => recipe.id === id)!) || { 
        ingredients: [] as string[],
        instructions: [] as string[],
      } as IRecipe;
    });
  }

  @Selector()
  static template(state: RecipesStateModel): TemplateRef<RouterOutlet> {
    return state.template!;
  }

  @Selector()
  static loading(state: RecipesStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static sidenav(state: RecipesStateModel): boolean {
    return state.sidenav;
  }

  @Selector()
  static error(state: RecipesStateModel): HttpErrorResponse {
    return state.error!;
  }

  @Action(FetchAll)
  fetchAll(ctx: StateContext<RecipesStateModel>) {
    ctx.patchState({ loading: true });

    return this.recipesService.fetchRecipes().pipe(
      tap((recipes: IRecipe[]) => {     
        ctx.patchState({ recipes: recipes, loading: false });
      }),
      catchError(error => of(
        ctx.dispatch(new Failure({ error }))
      )),
    )
  }

  @Action(Update)
  Update(ctx: StateContext<RecipesStateModel>, action: Update) {
    ctx.patchState({ loading: true });

    return this.recipesService.updateRecipe(action.payload.recipe.id, action.payload.recipe).pipe(
      tap(() => {     
        ctx.patchState({ loading: false });

        this._back();
      }),
      catchError(error => of(
        ctx.dispatch(new Failure({ error }))
      )),
    )
  }

  @Action(Create)
  Create(ctx: StateContext<RecipesStateModel>, action: Create) {
    ctx.patchState({ loading: true });

    return this.recipesService.addRecipe(action.payload.recipe).pipe(
      tap(() => {     
        ctx.patchState({ loading: false });

       // this._back();
      }),
      catchError(error => of(
        ctx.dispatch(new Failure({ error }))
      )),
    )
  }

  @Action(Edit)
  edit(ctx: StateContext<RecipesStateModel>, action: Edit) {
    ctx.patchState({ template: action.payload.template, sidenav: action.payload.sidenav });
  }

  @Action(Failure)
  failure(ctx: StateContext<RecipesStateModel>, action: Failure) {
    ctx.patchState({ error: action.payload.error, loading: false });
  }

  private _back(): void {
    this.ngZone.run(() => {
      this.router.navigateByUrl(this.redirectService.url$.getValue());
    })
  }
}