import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFormFieldsComponent } from './teacher-form-fields.component';

describe('TeacherFormFieldsComponent', () => {
  let component: TeacherFormFieldsComponent;
  let fixture: ComponentFixture<TeacherFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherFormFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
