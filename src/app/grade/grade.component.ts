
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GradeService } from './/services/grade-service.service';
import { GradeModel } from './/interfaces/grade-model.interface';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-grade',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        DialogModule,
        MessagesModule,
        ToastModule
    ],
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.scss'],
    providers: [GradeService]
})
export class GradeComponent implements OnInit {
    public visibleModalDelete: boolean = false;
    public visibleModalToSeeModel: boolean = false;
    public modelToDelete?: GradeModel
    public modelToLook?: GradeModel
    public messages: Message[] = [];

    public gradesList: GradeModel[] = []
    grades: GradeModel[] = []

    constructor(
        private gradeService: GradeService,
        private router: Router) { }

    ngOnInit(): void {
        this._getAllgradesList()
        this.gradeService.getAll().subscribe({
            next: (data) => {
                this.grades = data;
                this.gradesList = data;
                // this.gradeService.getAll().subscribe({
                //     next: (data) => this.grades = data,
                //      this.gradesList = data,
                error: (err: any) => console.error('Erro ao buscar notas', err)
            }})
    }
    private _getAllgradesList() {
        this.gradeService.getAll().subscribe(gradesList => this._fillTable(gradesList))

    }

    private _fillTable(gradesList: GradeModel[]) {
        this.gradesList = gradesList
    }

    goToCreatePage() {
        this.router.navigateByUrl('grades-form')
    }

    openModalToLook(grade: GradeModel) {
        this.visibleModalToSeeModel = true;
        this.modelToLook = grade
    }

    openPageToEdit(grade: GradeModel) {
        this.router.navigateByUrl('grades-form/' + grade.id)
    }

    openModalToDelete(grade: GradeModel) {
        this.visibleModalDelete = true;
        this.modelToDelete = grade
    }

    doDelete() {
        this.gradeService
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
        this._getAllgradesList()
        this.visibleModalDelete = false;
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'grade deleted with success' }];
    }

}