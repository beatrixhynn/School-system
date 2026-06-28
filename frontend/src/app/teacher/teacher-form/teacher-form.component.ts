import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TeacherService } from '../services/teacher-service.service';
import { TeacherModel } from '../interfaces/teacher-model.interface';
import { TeacherForm } from '../interfaces/teacher-form.interface';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-teacher-form',
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
        ToastModule,
    ],
    templateUrl: './teacher-form.component.html',
    styleUrl: './teacher-form.component.scss',
    providers: [
        TeacherService,
        MessageService
    ]
})
export class TeacherFormComponent implements OnInit {
    form!: FormGroup;
    idteacher?: string | null;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private teacherService: TeacherService,
        public router: Router,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this._createForm();

        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            if (!!params.get('id')) {
                this.idteacher = params.get('id');
                this._getModelToEdit();
            } else {
                this.idteacher = null;
            }
        });
    }

    private _createForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            birthDate: ['', Validators.required],
            education: ['', Validators.required],
            cellphone: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/^\d{11}$/) // Apenas números (11 dígitos)
                ]
            ],

            email: ['', [Validators.required, Validators.email]],
            salary: ['', [Validators.required, Validators.min(0)]],
        });
    }


    private _getModelToEdit() {
        this.teacherService.findById(+this.idteacher!).subscribe({
            next: (teacherModel) => this._populateForm(teacherModel),
            error: (error) => this._doErrorActionsOfFindById(error),
        });
    }

    private _populateForm(teacherModel: TeacherModel) {
        this.form.patchValue(teacherModel);
    }

    doSubmitForm() {
        if (this.form.invalid) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Atenção',
                detail: 'Preencha todos os campos obrigatórios corretamente.'
            });
            this.form.markAllAsTouched();
            return;
        }

        if (!!this.idteacher) {
            this._sendToEdit();
        } else {
            this._sendToCreate();
        }
    }

    private _sendToCreate() {
        const teacherForm = this.form.getRawValue() as TeacherForm;

        // Formata o celular para (XX) XXXXX-XXXX
        teacherForm.cellphone = teacherForm.cellphone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

        this.teacherService.create(teacherForm).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Professor criado com sucesso!',
                });
                this._doRedirectToTable();
            },
            error: (error) => this._doCreateWithErrorActions(error),
        });
    }


    private _sendToEdit() {
        const teacherForm = this.form.getRawValue() as TeacherForm;

        this.teacherService.update(+this.idteacher!, teacherForm).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Professor atualizado com sucesso!',
                });
                this._doRedirectToTable();
            },
            error: (error) => this._doEditWithErrorActions(error),
        });
    }

    private _doRedirectToTable() {
        this.router.navigateByUrl('teachers');
    }

    private _doCreateWithErrorActions(error: any) {
        console.error('Erro ao criar o professor:', error);
        this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail:
                error?.error?.message ||
                'Não foi possível criar o professor. Verifique os dados e tente novamente.',
        });
    }

    private _doEditWithErrorActions(error: any) {
        console.error('Erro ao editar o professor:', error);
        this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail:
                error?.error?.message ||
                'Não foi possível atualizar os dados do professor.',
        });
    }

    private _doErrorActionsOfFindById(error: any) {
        console.error('Erro ao carregar dados do professor:', error);
        this.messageService.add({
            severity: 'warn',
            summary: 'Falha ao carregar dados',
            detail:
                error?.error?.message ||
                'Não foi possível carregar os dados para edição.',
        });
    }
}
