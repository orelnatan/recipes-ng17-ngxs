import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: '[input] primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryButtonComponent {
  @Input() dosubmit: boolean;
  @Input() readonly: boolean;
  @Input() text: string;
  @Input() icon: string;
  @Input() palette: ThemePalette;
 
  @Output() onclick: EventEmitter<MouseEvent> = new EventEmitter();
}