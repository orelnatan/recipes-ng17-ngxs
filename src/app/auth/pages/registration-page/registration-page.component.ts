import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@recipes/shared/layout';

@Component({
  selector: 'registration-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

}
