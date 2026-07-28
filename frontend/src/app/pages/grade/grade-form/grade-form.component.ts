
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { GradeService } from '../services/grade-service.service';
import { GradeModel } from '../interfaces/grade-model.interface';
import { GradeForm } from '../interfaces/grade-form.interface';
import { TeacherService } from '../../../features/teacher/services/teacher-service.service';
import { TeacherModel } from '../../../features/teacher/interfaces/teacher-model.interface';



@Component({
    selector: 'app-grade-form',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule
    ],
    templateUrl: './grade-form.component.html',
    styleUrls: ['./grade-form.component.scss'],
    providers: [
        GradeService,
        TeacherService
    ]
})
export class GradeFormComponent implements OnInit {


    form!: FormGroup;

    idgrade?: string | null;

    teachersList: TeacherModel[] = [];


    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly activatedRoute: ActivatedRoute,
        private readonly gradeService: GradeService,
        private readonly teacherService: TeacherService,
        public router: Router
    ) {}



    ngOnInit(): void {

        this.createForm();

        this.loadTeachers();

        this.activatedRoute.paramMap.subscribe(params => {

            const id = params.get('id');

            this.idgrade = id;

            if (id) {
                this.loadGradeToEdit(+id);
            }

        });

    }



    private createForm(): void {

        this.form = this.formBuilder.group({

            year: [
                '',
                Validators.required
            ],

            section: [
                '',
                Validators.required
            ],

            room: [
                '',
                Validators.required
            ],

            teacherId: [
                '',
                Validators.required
            ]

        });

    }



    private loadTeachers(): void {

        this.teacherService
            .getAll()
            .subscribe({

                next: teachers => {
                    this.teachersList = teachers;
                },

                error: error => {
                    console.error(
                        'Erro ao carregar professores:',
                        error
                    );
                }

            });

    }



    private loadGradeToEdit(id: number): void {

        this.gradeService
            .findById(id)
            .subscribe({

                next: grade => {
                    this.populateForm(grade);
                },

                error: error => {
                    console.error(
                        'Erro ao buscar turma:',
                        error
                    );
                }

            });

    }



    private populateForm(grade: GradeModel): void {

        this.form.patchValue({

            year: grade.year,
            section: grade.section,
            room: grade.room,
            teacherId: grade.teacher?.id

        });

    }



    doSubmitForm(): void {

        if (this.form.invalid) {

            this.form.markAllAsTouched();
            return;

        }


        const gradeForm =
            this.form.getRawValue() as GradeForm;



        if (this.idgrade) {

            this.updateGrade(gradeForm);

        } else {

            this.createGrade(gradeForm);

        }

    }



    private createGrade(gradeForm: GradeForm): void {

        this.gradeService
            .create(gradeForm)
            .subscribe({

                next: () => this.redirect(),

                error: error =>
                    console.error(
                        'Erro ao criar turma:',
                        error
                    )

            });

    }



    private updateGrade(gradeForm: GradeForm): void {

        this.gradeService
            .update(
                Number(this.idgrade),
                gradeForm
            )
            .subscribe({

                next: () => this.redirect(),

                error: error =>
                    console.error(
                        'Erro ao editar turma:',
                        error
                    )

            });

    }



    private redirect(): void {

        this.router.navigateByUrl('grades');

    }

}