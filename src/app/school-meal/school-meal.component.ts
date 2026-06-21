
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SchoolMealService } from './/services/school-meal-service.service';
import { SchoolMealModel } from './/interfaces/school-meal-model.interface';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-school-meal',
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
    templateUrl: './school-meal.component.html',
    styleUrl: './school-meal.component.scss',
    providers: [SchoolMealService]
})
export class SchoolMealComponent implements OnInit {
    public visibleModalDelete: boolean = false;
    public visibleModalToSeeModel: boolean = false;
    public modelToDelete?: SchoolMealModel
    public modelToLook?: SchoolMealModel
    public messages: Message[] = [];

    public schoolMealsList: SchoolMealModel[] = []

    constructor(
        private schoolMealService: SchoolMealService,
        private router: Router) { }

    ngOnInit(): void {
        this._getAllschoolMealsList()
    }

    private _getAllschoolMealsList() {
        this.schoolMealService.getAll().subscribe(schoolMealsList => this._fillTable(schoolMealsList))

    }

    private _fillTable(schoolMealsList: SchoolMealModel[]) {
        this.schoolMealsList = schoolMealsList
    }

    goToCreatePage() {
        this.router.navigateByUrl('school-meals-form')
    }

    openModalToLook(schoolMeal: SchoolMealModel) {
        this.visibleModalToSeeModel = true;
        this.modelToLook = schoolMeal
    }

    openPageToEdit(schoolMeal: SchoolMealModel) {
        this.router.navigateByUrl('school-meals-form/' + schoolMeal.id)
    }

    openModalToDelete(schoolMeal: SchoolMealModel) {
        this.visibleModalDelete = true;
        this.modelToDelete = schoolMeal
    }

    doDelete() {
        this.schoolMealService
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
        this._getAllschoolMealsList()
        this.visibleModalDelete = false;
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'school Meal deleted with success' }];
    }

    getRestrictionClass(type?: string): string {
        if (!type) return 'none';
        const t = type.toLowerCase();
        if (t.includes('gluten') || t.includes('glúten')) return 'gluten';
        if (t.includes('lactose')) return 'lactose';
        if (t === 'nenhuma' || t === 'none' || t === '') return 'none';
        return 'other';
    }
}