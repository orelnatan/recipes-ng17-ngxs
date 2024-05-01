import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';
import { IListItem } from '../../models';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
})
export class InputSelectComponent<T> {
  @Input() control: AbstractControl;
  @Input() value: T;
  @Input() items: IListItem[] = [];
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<T> = new EventEmitter();
}