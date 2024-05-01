import { TemplateRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";

import { IRecipe } from "../models";

export interface RecipesStateModel {
  recipes: IRecipe[] | null,
  recipe: IRecipe | null,
  template: TemplateRef<RouterOutlet> | null;
  sidenav: boolean,
  loading: boolean,
  error: HttpErrorResponse | null,
}
