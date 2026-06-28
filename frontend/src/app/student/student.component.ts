
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './/services/student-service.service';
import { StudentModel } from './/interfaces/student-model.interface';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Toast, ToastModule } from 'primeng/toast';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/service/login.service';

@Component({
    selector: 'app-student',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        DialogModule,
        MessagesModule,
        ToastModule,
        LoginComponent,

    ],
    templateUrl: './student.component.html',
    styleUrl: './student.component.scss',
    providers: [StudentService],
    encapsulation: ViewEncapsulation.None

})
export class StudentComponent implements OnInit {
    public visibleModalDelete: boolean = false;
    public visibleModalToSeeModel: boolean = false;
    public modelToDelete?: StudentModel
    public modelToLook?: StudentModel
    public messages: Message[] = [];

    public studentsList: StudentModel[] = []

    constructor(
        private studentService: StudentService,
        private router: Router,
        public loginService: LoginService) { }

    ngOnInit(): void {
        if (!this.loginService.isAdmin()) {
            this.router.navigate(['/main-menu']);
            return;
        }

        this._getAllstudentsList();
    }

    private _getAllstudentsList() {
        this.studentService.getAll().subscribe(studentsList => this._fillTable(studentsList))

    }

    private _fillTable(studentsList: StudentModel[]) {
        this.studentsList = studentsList
    }

    goToCreatePage() {
        this.router.navigateByUrl('students-form')
    }

    openModalToLook(student: StudentModel) {
        this.visibleModalToSeeModel = true;
        this.modelToLook = student
    }

    openPageToEdit(student: StudentModel) {
        this.router.navigateByUrl('students-form/' + student.id)
    }

    openModalToDelete(student: StudentModel) {
        this.visibleModalDelete = true;
        this.modelToDelete = student
    }

    doDelete() {
        this.studentService
            .deleteById(this.modelToDelete?.id!)
            .subscribe({
                next: () => this._doDeleteSuccessActions(),
                error: error => this._doDeleteWithErrorActions(error)
            })
    }

    private _doDeleteWithErrorActions(error: any): void {
        throw new Error('Method not implemented.');
    }
    private _doDeleteSuccessActions(): void {
        this._getAllstudentsList()
        this.visibleModalDelete = false;
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'student deleted with success' }];
    }

}