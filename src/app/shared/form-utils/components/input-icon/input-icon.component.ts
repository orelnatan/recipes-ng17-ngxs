import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[input] input-icon',
  templateUrl: './input-icon.component.html',
  styleUrl: './input-icon.component.scss'
})
export class InputIconComponent {
  @Input() icon: string;

  @Output() iconClick: EventEmitter<void> = new EventEmitter();
}
