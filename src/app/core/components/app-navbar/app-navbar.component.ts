import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpacerModule } from '@recipes/shared/components';
import { FormUtilsModule } from '@recipes/shared/form-utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    FormUtilsModule,
    SpacerModule
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss'
})
export class AppNavbarComponent {

}
