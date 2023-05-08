import { Component } from '@angular/core';

@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.scss']
})
export class ImgToBase64Component {

  constructor() { }

  shortUrl: string = '';
  imageSrc: string = '';
  isLoading: boolean = false;

  handleInputChange(e: any) {
    this.isLoading = true;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      this.isLoading = false;
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }


  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
    this.isLoading = false;
    function shortenDataUrl(dataUrl: any) {
      let blob = new Blob([dataUrl], { type: 'text/plain' });
      return URL.createObjectURL(blob);
    }
    let dataUrl = this.imageSrc;
    this.shortUrl = shortenDataUrl(dataUrl);
    console.log(this.shortUrl);
  }





}
