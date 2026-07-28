


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SchoolMealService } from '../services/school-meal-service.service';
import { SchoolMealModel } from '../interfaces/school-meal-model.interface';
import { SchoolMealForm } from '../interfaces/school-meal-form.interface';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-school-meal-form',
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
  templateUrl: './school-meal-form.component.html',
  styleUrls: ['./school-meal-form.component.scss'],
  providers: [SchoolMealService]
})
export class SchoolMealFormComponent implements OnInit {
  form!: FormGroup;
  idschoolMeal?: string | null;

  tiposRestricao = [
    { label: 'Nenhuma', value: 'nenhuma' },
    { label: 'Glúten', value: 'gluten' },
    { label: 'Lactose', value: 'lactose' },
    { label: 'Vegano', value: 'vegano' },
    { label: 'Vegetariano', value: 'vegetariano' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private schoolMealService: SchoolMealService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this._initForm();

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.idschoolMeal = params.get('id');
      if (this.idschoolMeal) {
        this._getModelToEdit();
      }
    });
  }

  private _initForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      horario: [null, [Validators.required]], // campo usado no form
      tipoRestricao: ['', Validators.required]
    });
  }

  private _getModelToEdit(): void {
    this.schoolMealService.findById(+this.idschoolMeal!)
      .subscribe({
        next: schoolMealModel => this._populateForm(schoolMealModel),
        error: error => this._handleErrorFindById(error)
      });
  }

  private _populateForm(schoolMealModel: SchoolMealModel): void {
    this.form.patchValue({
      nome: schoolMealModel.name,
      descricao: schoolMealModel.description,
      horario: this._convertStringToDate(schoolMealModel.time),
      tipoRestricao: schoolMealModel.restrictionType,
    });
  }

  doSubmitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.idschoolMeal) {
      this._sendToEdit();
    } else {
      this._sendToCreate();
    }
  }

  private _sendToCreate(): void {
    const schoolMealForm = this._prepareFormData();
    this.schoolMealService.create(schoolMealForm)
      .subscribe({
        next: () => this._redirectToTable(),
        error: error => this._handleCreateError(error)
      });
  }

  private _sendToEdit(): void {
    const schoolMealForm = this._prepareFormData();
    this.schoolMealService.update(+this.idschoolMeal!, schoolMealForm)
      .subscribe({
        next: () => this._redirectToTable(),
        error: error => this._handleEditError(error)
      });
  }

  /** Converte o form para o formato aceito pelo backend */
  private _prepareFormData(): SchoolMealForm {
    const formValue = this.form.getRawValue();

    let time = formValue.horario;
    if (time instanceof Date) {
      const horas = time.getHours().toString().padStart(2, '0');
      const minutos = time.getMinutes().toString().padStart(2, '0');
      time = `${horas}:${minutos}`;
    }

    return {
      name: formValue.nome,
      description: formValue.descricao,
      time, // nome do campo no backend
      restrictionType: formValue.tipoRestricao
    };
  }

  /** Converte string HH:mm para Date */
  private _convertStringToDate(time: string): Date | null {
    if (!time) return null;
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  private _redirectToTable(): void {
    this.router.navigateByUrl('school-meals');
  }

  private _handleCreateError(error: any): void {
    console.error('Erro ao criar refeição:', error);
  }

  private _handleEditError(error: any): void {
    console.error('Erro ao editar refeição:', error);
  }

  private _handleErrorFindById(error: any): void {
    console.error('Erro ao buscar refeição:', error);
  }
}
