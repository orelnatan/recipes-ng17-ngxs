import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@recipes/shared/layout';
import { FormUtilsModule } from '@recipes/shared/form-utils';
import { FormsModule, NgForm } from '@angular/forms';

import { Country, IRegistration } from '@recipes/auth/models';
import { UtilsModule } from '@recipes/shared/utils';

@Component({
  selector: 'registration-page',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    FormUtilsModule,
    FormsModule,
    UtilsModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  @ViewChild(NgForm) ngForm: NgForm;

  registration: IRegistration = {} as IRegistration;
  countryEnum: typeof Country = Country;

  submit(registration: IRegistration): void {
    console.log(registration)
  }

  reset(): void {
    this.registration = {} as IRegistration;

    (<any>this.ngForm['submitted']) = false;
  }
}
