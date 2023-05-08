import { Component } from '@angular/core';
import { CompressorService } from './compressor.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-jpg-compressor',
  templateUrl: './jpg-compressor.component.html',
  styleUrls: ['./jpg-compressor.component.scss']
})
export class JpgCompressorComponent {

  constructor(private compressImage: CompressorService) { }

  isLoader: boolean = false;
  imageSrc: any;

  actualImgSize: number = 0;
  compressedImgSize: number = 0;

  upload(event: any) {
    let image: File = event.target.files[0];
    this.actualImgSize = image.size;
    console.log(`Image size before compressed: ${image.size} bytes.`);

    this.compressImage.compress(image)
      .pipe(take(1))
      .subscribe(compressedImage => {
        this.compressedImgSize = compressedImage.size;
        console.log(`Image size after compressed: ${compressedImage.size} bytes.`);
      });
  }

}
