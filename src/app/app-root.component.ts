import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <root-layout forRoot>
      <router-outlet />
    </root-layout>
  `,
})
export class AppRootComponent {}
