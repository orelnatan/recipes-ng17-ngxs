import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormUtilsModule } from '@recipes/shared/form-utils';

@Component({
  selector: 'edit-header',
  standalone: true,
  imports: [
    CommonModule,
    FormUtilsModule,
  ],
  templateUrl: './edit-header.component.html',
  styleUrl: './edit-header.component.scss'
})
export class EditHeaderComponent {
  @Input() title: string;
  @Input() hideAddOption: boolean;

  @Output() add: EventEmitter<void> = new EventEmitter();
}
