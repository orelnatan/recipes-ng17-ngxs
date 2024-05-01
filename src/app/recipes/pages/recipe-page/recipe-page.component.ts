import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';

import { LayoutModule } from '@recipes/shared/layout';
import { RecipesActions } from '@recipes/recipes/state';

@Component({
  selector: 'recipe-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<RouterOutlet>;

  constructor(
    private readonly store: Store
  ) {}
  
  ngAfterViewInit(): void {
    this.store.dispatch(new RecipesActions.Edit({
      template: this.templateRef,
      sidenav: true
    }))
  }

  ngOnDestroy(): void {
    this.store.dispatch(new RecipesActions.Edit({
      template: null,
      sidenav: false
    }))
  }
}
