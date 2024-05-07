import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@recipes/shared/layout';

@Component({
  selector: 'auth-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  template: `
    <root-layout>
      <router-outlet />
    </root-layout>
  `,
})
export class AuthRootComponent {}
