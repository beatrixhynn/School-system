
        import { CommonModule } from '@angular/common';
        import { Component, OnInit } from '@angular/core';
        import { HttpClientModule } from '@angular/common/http';
        import { TeacherService } from './/services/teacher-service.service';
        import { TeacherModel } from './/interfaces/teacher-model.interface';
        
        import { ButtonModule } from 'primeng/button';
        import { TableModule } from 'primeng/table';
        import { DialogModule } from 'primeng/dialog';
        import { MessagesModule } from 'primeng/messages';
        import { Router } from '@angular/router';
        import { Message } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

        @Component({
        selector: 'app-teacher',
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
        templateUrl: './teacher.component.html',
        styleUrl: './teacher.component.scss',
        providers : [TeacherService]
        })
        export class TeacherComponent implements OnInit {
            public visibleModalDelete : boolean = false;
            public visibleModalToSeeModel : boolean = false;
            public modelToDelete? : TeacherModel
            public modelToLook? : TeacherModel
            public messages: Message[] = [];
            showSalary = false;

            public teachersList : TeacherModel[] = []
           
            constructor(
                        public teacherService : TeacherService,
                        public router : Router){}

            ngOnInit(): void {
                this._getAllteachersList() 
            }
            
            private _getAllteachersList(){
                this.teacherService.getAll().subscribe(teachersList => this._fillTable(teachersList))

            }

            private _fillTable(teachersList : TeacherModel[]){
                this.teachersList = teachersList 
            }
            
            goToCreatePage(){
                this.router.navigateByUrl('teachers-form')
            }
            
            openModalToLook(teacher : TeacherModel){
                this.visibleModalToSeeModel = true;
                this.modelToLook = teacher
            }
            
            openPageToEdit(teacher : TeacherModel){
                this.router.navigateByUrl('teachers-form/' + teacher.id)
            }
            
            openModalToDelete(teacher : TeacherModel){
                this.visibleModalDelete = true;
                this.modelToDelete = teacher
            }

            doDelete(){
                this.teacherService
                        .deleteById(this.modelToDelete?.id!)
                        .subscribe({
                            next : () => this._doDeleteSuccessActions(),
                            error : error => this._doDeleteWithErrorActions(error)
                        })
                    }
            
            private _doDeleteWithErrorActions(error: any): void {
                throw new Error('Method not implemented.');
            }
            private _doDeleteSuccessActions(): void {
                this._getAllteachersList() 
                this.visibleModalDelete = false;
                this.messages = [{ severity: 'success', summary: 'Success', detail: 'teacher deleted with success' }];
            }

            

        }