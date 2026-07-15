import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFormHeaderComponent } from './teacher-form-header.component';

describe('TeacherFormHeaderComponent', () => {
  let component: TeacherFormHeaderComponent;
  let fixture: ComponentFixture<TeacherFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherFormHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
