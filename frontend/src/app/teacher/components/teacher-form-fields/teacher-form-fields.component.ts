import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-teacher-form-fields',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule
  ],
  templateUrl: './teacher-form-fields.component.html',
  styleUrl: './teacher-form-fields.component.scss'
})
export class TeacherFormFieldsComponent {

  @Input({ required: true })
  form!: FormGroup;

}