import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() value: string;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();

  ngOnChanges(): void {
    this.control.setValue(this.value);
  }
}