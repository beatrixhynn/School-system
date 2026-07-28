import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFormActionsComponent } from './teacher-form-actions.component';

describe('TeacherFormActionsComponent', () => {
  let component: TeacherFormActionsComponent;
  let fixture: ComponentFixture<TeacherFormActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherFormActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
