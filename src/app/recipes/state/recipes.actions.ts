import { TemplateRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { IRecipe } from '../models';

enum RecipesActionTypes {
  FetchAll = "[RECIPES] Fetch All",
  GetRecipe = "[RECIPES] Get Recipe",
  Edit = "[RECIPES] Edit",
  Update = "[RECIPES] Update",
  Create = "[RECIPES] Create",
  Toggle = "[RECIPES] Toggle",
  Layout = "[RECIPES] Layout",
  Failure = "[RECIPES] Failure"
}

export class FetchAll {
  static readonly type = RecipesActionTypes.FetchAll;
}

export class GetRecipe {
  static readonly type = RecipesActionTypes.GetRecipe;

  constructor(public payload: {
    id: string
  }) {}
}

export class Edit {
  static readonly type = RecipesActionTypes.Edit;

  constructor(public payload: {
    sidenav: boolean,
    template: TemplateRef<RouterOutlet> | null
  }) {}
}

export class Update {
  static readonly type = RecipesActionTypes.Update;

  constructor(public payload: {
    recipe: IRecipe
  }) {}
}

export class Create {
  static readonly type = RecipesActionTypes.Create;

  constructor(public payload: {
    recipe: IRecipe
  }) {}
}

export class Failure {
  static readonly type = RecipesActionTypes.Failure;

  constructor(public payload: {
    error: HttpErrorResponse
  }) {}
}


