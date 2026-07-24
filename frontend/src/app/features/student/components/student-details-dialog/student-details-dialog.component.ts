import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { StudentModel } from '../../interfaces/student-model.interface';

@Component({
  selector: 'app-student-details-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule
  ],
  templateUrl: './student-details-dialog.component.html',
  styleUrl: './student-details-dialog.component.scss'
})
export class StudentDetailsDialogComponent {

  @Input() visible = false;
  @Input() student?: StudentModel;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<StudentModel>();


  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(false);
  }


  editStudent() {
    this.edit.emit(this.student);
    this.closeDialog();
  }

}