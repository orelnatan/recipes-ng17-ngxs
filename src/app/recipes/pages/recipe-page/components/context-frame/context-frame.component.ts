import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { FormUtilsModule } from '@recipes/shared/form-utils';

@Component({
  selector: 'context-frame',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormUtilsModule,
    MatFormFieldModule
  ],
  templateUrl: './context-frame.component.html',
  styleUrl: './context-frame.component.scss'
})
export class ContextFrameComponent {
  @Input() title: string;
  @Input() gap: number;
  @Input() hideAddOption: boolean;
  @Input() error: boolean;
  
  @Output() add: EventEmitter<void> = new EventEmitter();
}
