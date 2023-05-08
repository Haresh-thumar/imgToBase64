import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImgToBase64Component } from './img-to-base64/img-to-base64.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UrlShortnerComponent } from './url-shortner/url-shortner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';

import { NgTinyUrlModule } from 'ng-tiny-url';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImgToBase64Component,
    UrlShortnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
