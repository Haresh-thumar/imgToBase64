import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToBase64Component } from './img-to-base64/img-to-base64.component';
import { UrlShortnerComponent } from './url-shortner/url-shortner.component';

const routes: Routes = [
  {path: 'imageToBase64', component: ImgToBase64Component},
  {path: 'url-shortner', component: UrlShortnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
