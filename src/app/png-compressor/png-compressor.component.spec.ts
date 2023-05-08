import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PngCompressorComponent } from './png-compressor.component';

describe('PngCompressorComponent', () => {
  let component: PngCompressorComponent;
  let fixture: ComponentFixture<PngCompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PngCompressorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PngCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
