// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { CalendarModule } from 'primeng/calendar';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { InputTextModule } from 'primeng/inputtext';
// import { MessagesModule } from 'primeng/messages';
// import { ToastModule } from 'primeng/toast';
// import { CheckboxModule } from 'primeng/checkbox';
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';
// import { FooterContactComponent } from '../shared/footer/footer-contact/footer-contact.component';
// import { FooterSocialComponent } from '../shared/footer/footer-social/footer-social.component';
// import { FooterFormComponent } from '../shared/footer/footer-form/footer-form.component';


// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [CommonModule,
//     ReactiveFormsModule,
//     InputTextModule,
//     ButtonModule,
//     CheckboxModule,
//     FooterContactComponent,
//     FooterSocialComponent,
//     FooterFormComponent
//   ],
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.scss']
// })
// export class FooterComponent {
//   form: FormGroup;



//   constructor(private fb: FormBuilder,
//   ) {
//     this.form = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       // tipoRestricao: ['', Validators.required],
//       concordo: [false, Validators.requiredTrue]

//     });
//   }


//   doSubmitForm() {
//     if (this.form.valid) {
//       // Lógica para salvar os dados
//       console.log(this.form.value);
//     }
//   }
//   voltarTopo() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContactComponent } from '../shared/footer/footer-contact/footer-contact.component';
import { FooterSocialComponent } from '../shared/footer/footer-social/footer-social.component';
import { FooterFormComponent } from '../shared/footer/footer-form/footer-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FooterContactComponent,
    FooterSocialComponent,
    FooterFormComponent
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}