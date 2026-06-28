import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule,
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
          CheckboxModule
        ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  [x: string]: any;
 form: FormGroup;

 tiposRestricao = [
    { label: 'Nenhuma', value: 'nenhuma' },
    { label: 'Glúten', value: 'gluten' },
    { label: 'Lactose', value: 'lactose' },
    { label: 'Vegano', value: 'vegano' },
    { label: 'Vegetariano', value: 'vegetariano' },
  ];
  
  constructor(private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
            // tipoRestricao: ['', Validators.required],
             concordo: [false, Validators.requiredTrue] 
      
    });
  }
  goBack(): void {
    this.router.navigateByUrl('/');
  }

  doSubmitForm() {
    if (this.form.valid) {
      // Lógica para salvar os dados
      console.log(this.form.value);
    }
  }
  voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


