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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgTinyUrlModule } from 'ng-tiny-url';
import { JpgCompressorComponent } from './jpg-compressor/jpg-compressor.component';
import { PngCompressorComponent } from './png-compressor/png-compressor.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { DragDropFileUploadComponent } from './drag-drop-file-upload/drag-drop-file-upload.component';
import { DragDropDirective } from './drag-drop-file-upload/drag-drop.directive';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImgToBase64Component,
    UrlShortnerComponent,
    JpgCompressorComponent,
    PngCompressorComponent,
    ScrollTopComponent,
    DragDropFileUploadComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgTinyUrlModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
