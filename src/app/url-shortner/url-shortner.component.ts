import { Component } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent {

  model = {
    inputUrl: ''
  };

  isLoading: boolean = false;
  shortenedUrl = '';
  isTextCopied: boolean = false;

  constructor(private tinyUrl: NgTinyUrlService) { }

  // create Url
  onSubmitUrl(urlForm: any) {
    if (urlForm.valid) {
      this.isLoading = true;
      this.tinyUrl.shorten(this.model.inputUrl).subscribe(res => {
        this.shortenedUrl = res;
        this.isLoading = false;
      },
        (error) => {
          alert('Something Went Wrong, Please Check Your URL and Try Again...');
          this.isLoading = false;
        });
    }
  }

  // Reset Form
  reset() {
    this.model.inputUrl = '';
    this.isTextCopied = false;
  }

  // Copy Url
  copyUrl(shortUrlElementRef: any) {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', shortUrlElementRef.innerHTML);
    inputElement.select();
    inputElement.setSelectionRange(0, 999999);
    try {
      navigator.clipboard.writeText(inputElement.value);
      this.isTextCopied = true;
      setTimeout(() => {
        this.isTextCopied = true;
      }, 2000);
    }
    catch (e) {
      console.log('Error While Coping....', e);
    }
  }


}
