import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgToBase64Component } from './img-to-base64.component';

describe('ImgToBase64Component', () => {
  let component: ImgToBase64Component;
  let fixture: ComponentFixture<ImgToBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgToBase64Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgToBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
