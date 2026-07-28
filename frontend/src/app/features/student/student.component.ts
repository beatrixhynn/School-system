
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { StudentService } from './services/student-service.service';
import { StudentModel } from './interfaces/student-model.interface';

import { StudentHeaderComponent } from './components/student-header/student-header.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDetailsDialogComponent } from './components/student-details-dialog/student-details-dialog.component';
import { StudentDeleteDialogComponent } from './components/student-delete-dialog/student-delete-dialog.component';
import { MessagesModule } from 'primeng/messages';
import { error } from 'console';
import { LoginService } from '../../auth/login/service/login.service';

@Component({
    selector: 'app-student',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        DialogModule,
        TableModule,
        ToastModule,
        StudentHeaderComponent,
        StudentTableComponent,
        StudentDetailsDialogComponent,
        StudentDeleteDialogComponent,
        MessagesModule
    ],
    templateUrl: './student.component.html',
    styleUrl: './student.component.scss',
    providers: [StudentService],
    encapsulation: ViewEncapsulation.None
})
export class StudentComponent implements OnInit {


    @Input() totalStudents = 0;

    @Input() isAdmin = false;

    @Output() create = new EventEmitter<void>();

    visibleModalDelete = false;
    visibleModalToSeeModel = false;

    modelToDelete?: StudentModel;
    modelToLook?: StudentModel;

    messages: Message[] = [];
    studentsList: StudentModel[] = [];

    constructor(
        private studentService: StudentService,
        private router: Router,
        public loginService: LoginService
    ) { }

    ngOnInit(): void {
        if (!this.loginService.isAdmin()) {
            this.router.navigate(['/main-menu']);
            return;
        }

        this.getStudents();
    }

    private getStudents(): void {
        this.studentService
            .getAll()
            .subscribe(students => this.studentsList = students);
    }


    goToCreatePage(): void {
        this.router.navigateByUrl('students-form');
    }

    openModalToLook(student: StudentModel): void {
        this.modelToLook = student;
        this.visibleModalToSeeModel = true;
    }

    openModalToDelete(student: StudentModel): void {
        this.modelToDelete = student;
        this.visibleModalDelete = true;
    }

    openPageToEdit(student: StudentModel): void {
        this.router.navigateByUrl(`students-form/${student.id}`);
    }

 doDelete(student: StudentModel): void {

  this.studentService
    .deleteById(student.id!)
    .subscribe({
      next: () => this._doDeleteSuccessActions(),
      error: error => this._doDeleteWithErrorActions(error)
    });

}


private _getAllstudentsList(): void {
  this.studentService
    .getAll()
    .subscribe({
      next: studentsList => this._fillTable(studentsList),
      error: error => console.error(error)
    });
}


private _fillTable(studentsList: StudentModel[]): void {
  this.studentsList = studentsList;
}


private _doDeleteSuccessActions(): void {

  this._getAllstudentsList();

  this.visibleModalDelete = false;

  this.messages = [
    {
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Aluno excluído com sucesso'
    }
  ];
}


private _doDeleteWithErrorActions(error: any): void {

  console.error(error);

  this.messages = [
    {
      severity: 'error',
      summary: 'Erro',
      detail: 'Não foi possível excluir o aluno'
    }
  ];
}
}