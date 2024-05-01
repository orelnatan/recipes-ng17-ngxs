import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { FormUtilsModule } from '@recipes/shared/form-utils';
import { Style } from '@recipes/recipes/models';

@Component({
  selector: 'recipe-header',
  standalone: true,
  imports: [
    CommonModule,
    FormUtilsModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './recipe-header.component.html',
  styleUrl: './recipe-header.component.scss'
})
export class RecipeHeaderComponent {
  @Input() name: string;
  @Input() autor: string;
  @Input() createdAt: string;
  @Input() style: Style;
  @Input() time: number;
  @Input() favorite: boolean;

  @Output() update: EventEmitter<void> = new EventEmitter();
  @Output() like: EventEmitter<void> = new EventEmitter();
}
