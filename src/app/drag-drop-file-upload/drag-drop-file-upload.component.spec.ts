import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropFileUploadComponent } from './drag-drop-file-upload.component';

describe('DragDropFileUploadComponent', () => {
  let component: DragDropFileUploadComponent;
  let fixture: ComponentFixture<DragDropFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropFileUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
