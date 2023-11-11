import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-drag-drop-file-upload',
  templateUrl: './drag-drop-file-upload.component.html',
  styleUrls: ['./drag-drop-file-upload.component.scss']
})
export class DragDropFileUploadComponent {
  // files: any[] = [];
  // imgs: any[] = [];


  // /**
  //  * on file drop handler
  //  */
  // onFileDropped(event: any) {
  //   this.prepareFilesList(event);
  //   console.log(event.target.files);
  // }

  // /**
  //  * handle file from browsing
  //  */
  // fileBrowseHandler(files: any) {
  //   this.prepareFilesList(files.target.files);
  // }

  // /**
  //  * Delete file from files list
  //  */
  // deleteFile(index: number) {
  //   this.files.splice(index, 1);
  // }

  // /**
  //  * Convert Files list to normal array list
  //  */
  // prepareFilesList(files: Array<any>) {
  //   for (const item of files) {
  //     this.files.push(item);
  //     console.log(item);

  //     if (files) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(files[0]); // read file as data url
  //       reader.onload = (event) => { // called once readAsDataURL is completed
  //         let aaa: any = event.target?.result;
  //         this.imgs.push(aaa);
  //       };
  //     }

  //   }
  // }




  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private sanitizer: DomSanitizer) { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
    // event.blob can be used to upload the cropped image
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
