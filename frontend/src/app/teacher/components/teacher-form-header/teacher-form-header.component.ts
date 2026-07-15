import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-form-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-form-header.component.html',
  styleUrls: ['./teacher-form-header.component.scss']
})
export class TeacherFormHeaderComponent {

  @Input() isEdit = false;

}