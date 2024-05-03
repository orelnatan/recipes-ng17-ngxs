import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-icon',
  templateUrl: './input-icon.component.html',
  styleUrl: './input-icon.component.scss'
})
export class InputIconComponent {
  @Input() icon: string;

  @Output() onclick: EventEmitter<void> = new EventEmitter();
}
