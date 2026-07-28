
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