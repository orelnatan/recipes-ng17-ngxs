import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: '[input] input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent implements AfterContentChecked {
  @Input() control: FormControl = new FormControl();
  @Input() value: boolean;
  @Input() text: string;
  @Input() readonly: boolean;

  @Output() onchange: EventEmitter<boolean> = new EventEmitter();

  ngAfterContentChecked(): void {
    this.control?.setValue(this.value ? this.value : null);
  }
}