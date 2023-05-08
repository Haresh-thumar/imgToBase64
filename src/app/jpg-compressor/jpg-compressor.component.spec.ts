import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgCompressorComponent } from './jpg-compressor.component';

describe('JpgCompressorComponent', () => {
  let component: JpgCompressorComponent;
  let fixture: ComponentFixture<JpgCompressorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpgCompressorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpgCompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
