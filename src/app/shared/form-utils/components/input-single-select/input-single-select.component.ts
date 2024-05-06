import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';
import { IListItem } from '../../models';

@Component({
  selector: '[input] input-single-select',
  templateUrl: './input-single-select.component.html',
})
export class InputSingleSelectComponent<T> implements OnChanges {
  @Input() control: FormControl = new FormControl();
  @Input() value: T;
  @Input() items: IListItem[] = [];
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<T> = new EventEmitter();

  ngOnChanges(): void {
    this.control.setValue(this.value);
  }
}