import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  RootLayoutComponent,
  PageLayoutComponent, 
  LayoutHeaderComponent,
  ContentHeaderComponent,
  LayoutSidebarComponent,
} from './components';

@NgModule({
  declarations: [
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    ContentHeaderComponent,
    LayoutSidebarComponent,
  ],
  imports: [ 
    CommonModule,
    RouterModule,
  ],
  exports: [
    RootLayoutComponent,
    PageLayoutComponent,
    LayoutHeaderComponent, 
    ContentHeaderComponent,
    LayoutSidebarComponent,
  ]
})
export class LayoutModule {}