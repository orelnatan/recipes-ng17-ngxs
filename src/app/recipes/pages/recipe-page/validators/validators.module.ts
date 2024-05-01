import { NgModule } from '@angular/core';

import { AtLeastOneIngredientValidator } from './at-least-one-ingredient.validator';
import { AtLeastOneInstructionValidator } from './at-least-one-instruction.validator';

@NgModule({
  declarations: [ 
    AtLeastOneIngredientValidator,
    AtLeastOneInstructionValidator
  ],
  exports: [
    AtLeastOneIngredientValidator,
    AtLeastOneInstructionValidator,
  ]
})
export class ValidatorsModule {}