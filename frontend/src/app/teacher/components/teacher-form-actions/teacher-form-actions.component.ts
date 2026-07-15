import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-form-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-form-actions.component.html',
  styleUrl: './teacher-form-actions.component.scss'
})
export class TeacherFormActionsComponent {

  @Input()
  isEdit = false;

  @Input()
  disabled = false;

  @Output()
  cancel = new EventEmitter<void>();

}