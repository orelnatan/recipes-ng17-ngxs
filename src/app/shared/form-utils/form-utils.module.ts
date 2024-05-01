import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { 
  InputTextComponent,
  InputTextareaComponent,
  InputsContainerComponent,
  InputFieldComponent,
  PrimaryButtonComponent,
  InputNumberComponent,
  InputSelectComponent,
  InputCommentsComponent,
} from './components';

import { 
  AbstractToFormControlPipe
} from './pipes';

@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputCommentsComponent,
    InputsContainerComponent,
    InputFieldComponent,
    PrimaryButtonComponent,
    AbstractToFormControlPipe
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
    MatRadioModule
  ],
  exports: [
    InputTextComponent,
    InputNumberComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputCommentsComponent,
    InputsContainerComponent,
    InputFieldComponent,
    PrimaryButtonComponent,
    AbstractToFormControlPipe
  ]
})
export class FormUtilsModule {}