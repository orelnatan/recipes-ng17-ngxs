import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { 
  CollectionValidator,
  RequireMatchValidator
} from './validators';

import { 
  InputTextComponent,
  InputPasswordComponent,
  InputTextareaComponent,
  InputsContainerComponent,
  InputFieldComponent,
  PrimaryButtonComponent,
  InputNumberComponent,
  InputSingleSelectComponent,
  InputIconComponent,
  InputCheckboxComponent,
} from './components';

@NgModule({
  declarations: [
    InputTextComponent,
    InputPasswordComponent,
    InputNumberComponent,
    InputTextareaComponent,
    InputSingleSelectComponent,
    InputsContainerComponent,
    InputFieldComponent,
    InputIconComponent,
    PrimaryButtonComponent,
    InputCheckboxComponent,
    RequireMatchValidator,
    CollectionValidator,
  ],
  imports: [ 
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    InputTextComponent,
    InputPasswordComponent,
    InputNumberComponent,
    InputTextareaComponent,
    InputSingleSelectComponent,
    InputsContainerComponent,
    InputFieldComponent,
    InputIconComponent,
    PrimaryButtonComponent,
    InputCheckboxComponent,
    RequireMatchValidator,
    CollectionValidator,
  ]
})
export class FormUtilsModule {}