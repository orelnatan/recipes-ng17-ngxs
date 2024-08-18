import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <root-layout forRoot>
      <router-outlet />
    </root-layout>
  `,
})
export class AppRootComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}


  ngOnInit(): void {
    this.document.body.classList.add("dark");

    setTimeout(() => {
      this.document.body.classList.remove("dark");
      this.document.body.classList.add("light");
    }, 5000);
  }
}
