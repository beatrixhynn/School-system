import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModel } from '../../interfaces/student-model.interface';

import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent {

  @Input() students: StudentModel[] = [];

  @Input() isAdmin = false;

  @Output() view = new EventEmitter<StudentModel>();
  @Output() edit = new EventEmitter<StudentModel>();
  @Output() delete = new EventEmitter<StudentModel>();

}