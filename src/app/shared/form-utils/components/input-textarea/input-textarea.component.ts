import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: 'input-textarea',
  templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent {
  @Input() value: string;
  @Input() control: AbstractControl;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() maxlength: number;
  @Input() readonly: boolean;
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();

  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
}