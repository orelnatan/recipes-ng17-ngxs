import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { 
  RootLayoutComponent,
  PageLayoutComponent, 
  ContentHeaderComponent,
  LayoutSidebarComponent,
} from './components';

@NgModule({
  declarations: [
    RootLayoutComponent,
    PageLayoutComponent, 
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
    ContentHeaderComponent,
    LayoutSidebarComponent,
  ]
})
export class LayoutModule {}