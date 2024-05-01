import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';

import { BaseErrorStateMatcher } from '../../classes';

@Component({
  selector: 'input-comments',
  templateUrl: './input-comments.component.html',
  styleUrl: './input-comments.component.scss'
})
export class InputCommentsComponent {
  @Input() control: FormControl = new FormControl();
  @Input() value: string[];
  @Input() validation: string;
  @Input() placeholder: string;
  @Input() readonly: boolean;
 
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  @Output() onchange: EventEmitter<string[]> = new EventEmitter();

  add(): void {
    this.onchange.emit([ ...(this.value || []), ...[''] ]);
  }

  remove(index: number): void {
    this.value.splice(index + 1, 1);

    this.onchange.emit(this.value);
  }
}