import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LayoutModule } from '@recipes/shared/layout';
import { SidenavModule } from '@recipes/shared/components';

import { RecipesNavbarModule } from './components';
import { RecipesState } from './state';

@Component({
  selector: 'recipes-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    RecipesNavbarModule,
    SidenavModule
  ],
  template: `
    <root-layout>
      <sidenav>
        <ng-container inner-content>
          <ng-content *ngTemplateOutlet="template | async"></ng-content>
        </ng-container>

        <ng-container external-content>
          <root-layout>
            <layout-header>
              <recipes-navbar></recipes-navbar>
            </layout-header>

            <router-outlet />
          </root-layout>
        </ng-container>
      </sidenav>
    </root-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesRootComponent {
  @Select(RecipesState.template) template: Observable<TemplateRef<RouterOutlet>>;
}
