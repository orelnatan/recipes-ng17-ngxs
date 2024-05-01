import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent {
  @Input() control: AbstractControl;
  @Input() value: string;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();
}