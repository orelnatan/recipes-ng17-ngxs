import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { IRecipe } from '@recipes/recipes/models';

@Directive({
  selector: '[atLeastOneInstruction]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AtLeastOneInstructionValidator, multi: true }
  ]
})
export class AtLeastOneInstructionValidator implements Validator { 
  @Input() recipe: IRecipe;
  
  validate(group: FormGroup): ValidationErrors | null {
    return this.recipe?.instructions?.length ? null : {
      atLeastOneInstruction: {
        value: 0,
        required: 1
      }
    };
  }
}


