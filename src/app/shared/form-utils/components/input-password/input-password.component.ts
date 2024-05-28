import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: '[input] input-password',
  templateUrl: './input-password.component.html',
})
export class InputPasswordComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() value: string;
  @Input() visible: boolean;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();

  ngOnChanges(): void {
    this.control.setValue(this.value);
  }
}