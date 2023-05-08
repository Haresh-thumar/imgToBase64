import { Component } from '@angular/core';
import {NgTinyUrlService} from 'ng-tiny-url';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent {

  model = {
    inputUrl: ''
  }

  isLoading:boolean = false;
  shortenedUrl = '';
  isTextCopied:boolean = false;

  constructor(private tinyUrl: NgTinyUrlService){}

  onSubmitUrl(urlForm:any){
    if(urlForm.valid) {
      this.isLoading = true;
      this.tinyUrl.shorten(this.model.inputUrl).subscribe(res => {
        this.shortenedUrl = res;
        this.isLoading = false
      },
      (error) => {
        alert('Something Went Wrong, Please Check Your URL and Try Again...')
        this.isLoading = false;
      })
    }
  }


  reset(){
    this.model.inputUrl = '';
    this.isTextCopied = false
  }


}
