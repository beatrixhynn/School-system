import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ContactService } from '../../../pages/contact-us/services/contact-us.service';
import { ContactForm } from '../../../pages/contact-us/interfaces/contact-form.interface';


@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule  ],
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.scss']
})
export class FooterFormComponent {
  form: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     concordo: [false, Validators.requiredTrue]
  //   });
  // }
  constructor(
  private fb: FormBuilder,
  private contactService: ContactService
) {
  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    concordo: [false, Validators.requiredTrue]
  });
}
doSubmitForm(): void {

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const contact: ContactForm = {
    name: this.form.value.name,
    email: this.form.value.email
  };

  this.contactService.create(contact).subscribe({
    next: () => {

      alert('Cadastro realizado com sucesso!');

      this.form.reset({
        name: '',
        email: '',
        concordo: false
      });

    },

    error: (error) => {
      console.error(error);
      alert('Erro ao enviar cadastro.');
    }

  });

}
}