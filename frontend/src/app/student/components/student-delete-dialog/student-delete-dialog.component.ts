import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { StudentModel } from '../../interfaces/student-model.interface';

@Component({
  selector: 'app-student-delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule
  ],
  templateUrl: './student-delete-dialog.component.html',
  styleUrl: './student-delete-dialog.component.scss'
})
export class StudentDeleteDialogComponent {

  @Input() visible = false;
  @Input() student?: StudentModel;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() confirmDelete = new EventEmitter<StudentModel>();


  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(false);
  }


  deleteStudent() {
    if (this.student) {
      this.confirmDelete.emit(this.student);
      this.closeDialog();
    }
  }
  confirmDeleteStudent(): void {
    if (this.student) {
      this.confirmDelete.emit(this.student);
      this.closeDialog();
    }
  }

}