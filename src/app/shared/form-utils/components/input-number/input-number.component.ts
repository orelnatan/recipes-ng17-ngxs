import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: '[input] input-number',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() value: number;
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<number> = new EventEmitter();

  ngOnChanges(): void {
    this.control.setValue(this.value);
  }
}