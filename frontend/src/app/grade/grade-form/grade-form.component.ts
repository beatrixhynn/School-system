
        import { CommonModule } from '@angular/common';
        import { Component, OnInit } from '@angular/core';
        import { HttpClientModule } from '@angular/common/http';
        import { GradeService } from '../services/grade-service.service';
        import { GradeModel } from '../interfaces/grade-model.interface';
        
        import { GradeForm } from '../interfaces/grade-form.interface';
        import { ButtonModule } from 'primeng/button';
        import { ActivatedRoute, ParamMap } from '@angular/router';
        import { MessagesModule } from 'primeng/messages';
        import { Router } from '@angular/router';
        import { Message, MessageService } from 'primeng/api';
        import { InputTextModule } from 'primeng/inputtext';
        import { DropdownModule } from 'primeng/dropdown';
        import { InputNumberModule } from 'primeng/inputnumber';
        import { CalendarModule } from 'primeng/calendar';
        import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherModel } from '../../teacher/interfaces/teacher-model.interface';
import { TeacherService } from '../../teacher/services/teacher-service.service';
import { ToastModule } from 'primeng/toast';
        
        @Component({
            selector: 'app-grade-form',
            standalone: true,
            imports: [
                CommonModule, 
                HttpClientModule, 
                ButtonModule,
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                DropdownModule,
                CalendarModule,
                InputNumberModule,
                MessagesModule,
                ReactiveFormsModule ,ToastModule

            ],
            templateUrl: './grade-form.component.html',
            styleUrl: './grade-form.component.scss',
            providers : [
                GradeService,
                TeacherService,
                MessageService
            ]
        })
        export class GradeFormComponent implements OnInit {
            form! : FormGroup
            idgrade? :  string | null
            
            public teachersList : TeacherModel[] = [] 

            
            constructor(
                private formBuilder : FormBuilder,
                private activatedRoute: ActivatedRoute,
                private gradeService : GradeService,
                public router : Router,
                private teacherService : TeacherService ,
                private messageService: MessageService,
) {}
         
            
            ngOnInit(): void {
                this._createForm()
                this._populateTeacherFormInput() 
                    this._loadTeachers();


                
                this.messageService.add({severity:'success', summary: 'Success', detail: 'Grade salva'});
                this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
                    if(!!params.get('id')){
                        this.idgrade = params.get('id');
                        this._getModelToEdit()
                    } else {
                        this.idgrade = null;
                    }
                });
                
                
                
            }
            
            
                private _populateTeacherFormInput(){ 

                    this.teacherService.getAll()
                                        .subscribe(teachersList => this.teachersList = teachersList)
                }


            private _createForm() {
                this.form = this.formBuilder.group({
                    year : ['', Validators.required], 
section : ['', Validators.required], 
room : ['', Validators.required], 
teacherId : ['', Validators.required], 

              })
            }
              private _loadTeachers() {
    this.teacherService.getAll().subscribe({
      next: (teachers) => (this.teachersList = teachers),
    });
  }
            private _getModelToEdit() {
                this.gradeService.findById(+this.idgrade!)
                                                        .subscribe({
                                                            next : gradeModel => this._populateForm(gradeModel),
                                                            error : error => this._doErrorActionsOfFindById(error)
                                                        })
              
            }

            private _populateForm(gradeModel : GradeModel){
                this.form.patchValue(gradeModel)
            }

            doSubmitForm(){
                 if (this.form.valid) {
      const gradeForm = this.form.getRawValue();
      this.gradeService.create(gradeForm).subscribe({
        next: () => this.router.navigateByUrl('grades'),
        error: (err) => console.error('Erro ao criar turma:', err),
      });
    } else {
      this.form.markAllAsTouched(); // força exibição dos erros
    }
  }

            
            private _sendToCreate(){
                const gradeForm = this.form.getRawValue() as GradeForm
                
                this.gradeService.create(gradeForm)
                .subscribe({
                                next : () => this._doRedirectToTable(),
                                error : error => this._doCreateWithErrorActions(error)
                            })
                                                    
            }
            private _sendToEdit(){
                
                const gradeForm = this.form.getRawValue() as GradeForm
                
                this.gradeService.update( +this.idgrade! ,gradeForm)
                .subscribe({
                                next : () => this._doRedirectToTable(),
                                error : error => this._doEditWithErrorActions(error)
                            })
            
            }    
            
            private _doRedirectToTable(){
                this.router.navigateByUrl('grades')
            }

            private _doCreateWithErrorActions(error : any){
                throw new Error('Method not implemented.');
            }
            
            private _doEditWithErrorActions(error : any){
                throw new Error('Method not implemented.');
            }

            private _doErrorActionsOfFindById(error : any){
                throw new Error('Method not implemented.');
            }
        }