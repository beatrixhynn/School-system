import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-header',
  standalone: true,
  imports: [],
  templateUrl: './student-header.component.html',
  styleUrl: './student-header.component.scss'
})
export class StudentHeaderComponent {

  @Input() totalStudents = 0;

  @Input() isAdmin = false;

  @Output() create = new EventEmitter<void>();
}
