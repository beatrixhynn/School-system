
// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { GradeService } from './/services/grade-service.service';
// import { GradeModel } from './/interfaces/grade-model.interface';

// import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
// import { DialogModule } from 'primeng/dialog';
// import { MessagesModule } from 'primeng/messages';
// import { Router } from '@angular/router';
// import { Message } from 'primeng/api';
// import { ToastModule } from 'primeng/toast';

// @Component({
//     selector: 'app-grade',
//     standalone: true,
//     imports: [
//         CommonModule,
//         HttpClientModule,
//         ButtonModule,
//         TableModule,
//         DialogModule,
//         MessagesModule,
//         ToastModule
//     ],
//     templateUrl: './grade.component.html',
//     styleUrls: ['./grade.component.scss'],
//     providers: [GradeService]
// })
// export class GradeComponent implements OnInit {
//     public visibleModalDelete: boolean = false;
//     public visibleModalToSeeModel: boolean = false;
//     public modelToDelete?: GradeModel
//     public modelToLook?: GradeModel
//     public messages: Message[] = [];

//     public gradesList: GradeModel[] = []
//     grades: GradeModel[] = []

//     constructor(
//         private gradeService: GradeService,
//         private router: Router) { }

//     ngOnInit(): void {
//         this._getAllgradesList()
//         this.gradeService.getAll().subscribe({
//             next: (data) => {
//                 this.grades = data;
//                 this.gradesList = data;
//                 // this.gradeService.getAll().subscribe({
//                 //     next: (data) => this.grades = data,
//                 //      this.gradesList = data,
//                 error: (err: any) => console.error('Erro ao buscar notas', err)
//             }})
//     }
//     private _getAllgradesList() {
//         this.gradeService.getAll().subscribe(gradesList => this._fillTable(gradesList))

//     }

//     private _fillTable(gradesList: GradeModel[]) {
//         this.gradesList = gradesList
//     }

//     goToCreatePage() {
//         this.router.navigateByUrl('grades-form')
//     }

//     openModalToLook(grade: GradeModel) {
//         this.visibleModalToSeeModel = true;
//         this.modelToLook = grade
//     }

//     openPageToEdit(grade: GradeModel) {
//         this.router.navigateByUrl('grades-form/' + grade.id)
//     }

//     openModalToDelete(grade: GradeModel) {
//         this.visibleModalDelete = true;
//         this.modelToDelete = grade
//     }

//     doDelete() {
//         this.gradeService
//             .deleteById(this.modelToDelete?.id!)
//             .subscribe({
//                 next: () => this._doDeleteSuccessActions(),
//                 error: error => this._doDeleteWithErrorActions(error)
//             })
//     }

//     private _doDeleteWithErrorActions(error: any): void {
//         throw new Error('Method not implemented.');
//     }
//     private _doDeleteSuccessActions(): void {
//         this._getAllgradesList()
//         this.visibleModalDelete = false;
//         this.messages = [{ severity: 'success', summary: 'Success', detail: 'grade deleted with success' }];
//     }

// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Message } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';

import { GradeService } from './services/grade-service.service';
import { GradeModel } from './interfaces/grade-model.interface';


@Component({
    selector: 'app-grade',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        TableModule,
        DialogModule,
        MessagesModule
    ],
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.scss'],
    providers: [GradeService]
})
export class GradeComponent implements OnInit {

    public visibleModalDelete = false;
    public visibleModalToSeeModel = false;

    public modelToDelete?: GradeModel;
    public modelToLook?: GradeModel;

    public messages: Message[] = [];

    public gradesList: GradeModel[] = [];


    constructor(
        private readonly gradeService: GradeService,
        private readonly router: Router
    ) {}


    ngOnInit(): void {
        this.loadGrades();
    }


    private loadGrades(): void {
        this.gradeService.getAll()
            .subscribe({
                next: (grades) => {
                    this.gradesList = grades;
                },
                error: (error) => {
                    console.error('Erro ao carregar turmas:', error);

                    this.messages = [{
                        severity: 'error',
                        summary: 'Erro',
                        detail: 'Não foi possível carregar as turmas.'
                    }];
                }
            });
    }


    goToCreatePage(): void {
        this.router.navigateByUrl('grades-form');
    }


    openModalToLook(grade: GradeModel): void {
        this.modelToLook = grade;
        this.visibleModalToSeeModel = true;
    }


    openPageToEdit(grade: GradeModel): void {
        this.router.navigateByUrl(`grades-form/${grade.id}`);
    }


    openModalToDelete(grade: GradeModel): void {
        this.modelToDelete = grade;
        this.visibleModalDelete = true;
    }


    doDelete(): void {

        if (!this.modelToDelete?.id) {
            return;
        }

        this.gradeService
            .deleteById(this.modelToDelete.id)
            .subscribe({
                next: () => this.deleteSuccess(),
                error: (error) => this.deleteError(error)
            });
    }


    private deleteSuccess(): void {

        this.loadGrades();

        this.visibleModalDelete = false;
        this.modelToDelete = undefined;

        this.messages = [{
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Turma excluída com sucesso.'
        }];
    }


    private deleteError(error: unknown): void {

        console.error('Erro ao excluir turma:', error);

        this.messages = [{
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível excluir a turma.'
        }];
    }

}