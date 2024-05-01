import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { FormUtilsModule } from '@recipes/shared/form-utils';

@Component({
  selector: 'recipes-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    FormUtilsModule,
    RouterModule
  ],
  templateUrl: './recipes-navbar.component.html',
  styleUrl: './recipes-navbar.component.scss'
})
export class RecipesNavbarComponent {
  constructor(
    public readonly router: Router,
    public readonly activatedRoute: ActivatedRoute,
  ) {}
}
