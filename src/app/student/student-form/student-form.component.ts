
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../services/student-service.service';
import { StudentModel } from '../interfaces/student-model.interface';
import { ToastModule } from 'primeng/toast';
import { StudentForm } from '../interfaces/student-form.interface';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GradeModel } from '../../grade/interfaces/grade-model.interface';
import { GradeService } from '../../grade/services/grade-service.service';



@Component({
    selector: 'app-student-form',
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
        ToastModule
    ],
    templateUrl: './student-form.component.html',
    styleUrl: './student-form.component.scss',
    providers: [
        StudentService,
        GradeService,
        MessageService
    ]
})
export class StudentFormComponent implements OnInit {
    form!: FormGroup
    idstudent?: string | null

    public gradesList: GradeModel[] = []


    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private studentService: StudentService,
        public router: Router,
        private gradeService: GradeService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this._createForm()
        this._populateGradeFormInput()



        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            if (!!params.get('id')) {
                this.idstudent = params.get('id');
                this._getModelToEdit()
            } else {
                this.idstudent = null;
            }
        });



    }


    private _populateGradeFormInput() {

        this.gradeService.getAll()
            .subscribe(gradesList => this.gradesList = gradesList)
    }


    private _createForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, , Validators.minLength(3)]],
            birthDate: ['', Validators.required],
            parentName: ['', Validators.required],
            parentCellphone: ['', [Validators.required, Validators.pattern(/^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/)
            ]],
            email: ['', [Validators.required, Validators.email]],
            gradeId: ['', Validators.required],

        })
    }
    private _getModelToEdit() {
        this.studentService.findById(+this.idstudent!)
            .subscribe({
                next: studentModel => this._populateForm(studentModel),
                error: error => this._doErrorActionsOfFindById(error)
            })

    }

    private _populateForm(studentModel: StudentModel) {
        this.form.patchValue(studentModel)
    }

    doSubmitForm() {
        this.form.markAllAsTouched();

        if (!!this.idstudent) {
            this._sendToEdit()
        } else {
            this._sendToCreate()
        }


    }

    private _sendToCreate() {
        const studentForm = this.form.getRawValue() as StudentForm;

        this.studentService.create(studentForm).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Aluno criado',
                    detail: 'O aluno foi cadastrado com sucesso!'
                });

                this._doRedirectToTable();
            },
            error: (error) => this._doCreateWithErrorActions(error)
        });
    }

    private _sendToEdit() {

        const studentForm = this.form.getRawValue() as StudentForm;

        this.studentService.update(+this.idstudent!, studentForm).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Aluno atualizado',
                    detail: 'Os dados do aluno foram atualizados com sucesso!'
                });

                this._doRedirectToTable();
            },
            error: (error) => this._doEditWithErrorActions(error)
        });
    }

    private _doRedirectToTable() {
        this.router.navigateByUrl('students')
    }

    private _doCreateWithErrorActions(error: any) {
        console.error('Erro ao criar aluno:', error);

        this.messageService.add({
            severity: 'error',
            summary: 'Erro ao criar aluno',
            detail: error?.error?.message || 'Não foi possível criar o aluno. Verifique os dados e tente novamente.'
        });
    }
    private _doEditWithErrorActions(error: any) {
        console.error('Erro ao editar aluno:', error);

        this.messageService.add({
            severity: 'error',
            summary: 'Erro ao editar aluno',
            detail: error?.error?.message || 'Não foi possível atualizar os dados do aluno.'
        });
    }

    private _doErrorActionsOfFindById(error: any) {
        console.error('Erro ao buscar aluno para edição:', error);

        this.messageService.add({
            severity: 'warn',
            summary: 'Falha ao carregar dados',
            detail: error?.error?.message || 'Não foi possível carregar os dados do aluno.'
        });
    }
}