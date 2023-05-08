import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgToBase64Component } from './img-to-base64/img-to-base64.component';

const routes: Routes = [
  {path: 'imageToBase64', component: ImgToBase64Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
