import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent {
  @Input() control: FormControl = new FormControl();
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<number> = new EventEmitter();
}