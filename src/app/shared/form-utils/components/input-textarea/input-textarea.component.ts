import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: '[input] input-textarea',
  templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() value: string;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() maxlength: number;
  @Input() readonly: boolean;
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();

  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();

  ngOnChanges(): void {
    this.control.setValue(this.value);
  }
}