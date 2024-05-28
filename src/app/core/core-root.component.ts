import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@recipes/shared/layout';

import { 
  AppNavbarModule
} from './components';

@Component({
  selector: 'core-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    AppNavbarModule,
  ],
  template: `
    <root-layout>
      <layout-header>
        <app-navbar></app-navbar>
      </layout-header>

      <router-outlet />
    </root-layout>
  `,
})
export class CoreRootComponent {}
