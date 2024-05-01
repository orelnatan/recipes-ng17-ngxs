import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { IRecipe } from '@recipes/recipes/models';

@Directive({
  selector: '[atLeastOneIngredient]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AtLeastOneIngredientValidator, multi: true }
  ]
})
export class AtLeastOneIngredientValidator implements Validator { 
  @Input() recipe: IRecipe;
  
  validate(group: FormGroup): ValidationErrors | null {
    return this.recipe?.ingredients?.length ? null : {
      atLeastOneIngredient: {
        value: 0,
        required: 1
      }
    };
  }
}


