import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Google Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { LayoutModule } from '@recipes/shared/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './app-root.component';
import { AppStateModule } from './state';

@NgModule({
  declarations: [
    AppRootComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppStateModule,
    FormsModule,
    LayoutModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      "projectId":"mine-recipe-app-empty",
      "appId":"1:86900632916:web:0574fcbea2bbb9600aacc1",
      "storageBucket":"mine-recipe-app-empty.appspot.com",
      "apiKey":"AIzaSyDHGtZtSu10StiT0r0j09O0CqJ8jYvplaE",
      "authDomain":"mine-recipe-app-empty.firebaseapp.com",
      "messagingSenderId":"86900632916"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
