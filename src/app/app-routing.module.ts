import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToBase64Component } from './img-to-base64/img-to-base64.component';
import { UrlShortnerComponent } from './url-shortner/url-shortner.component';
import { JpgCompressorComponent } from './jpg-compressor/jpg-compressor.component';
import { PngCompressorComponent } from './png-compressor/png-compressor.component';

const routes: Routes = [
  { path: 'imageToBase64', component: ImgToBase64Component },
  { path: 'url-shortner', component: UrlShortnerComponent },
  { path: 'jpg-compressor', component: JpgCompressorComponent },
  { path: 'png-compressor', component: PngCompressorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
