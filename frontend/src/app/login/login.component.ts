// import { Component } from '@angular/core';
// import { ButtonModule } from 'primeng/button';
// import { CarouselModule } from 'primeng/carousel';
// import { TableModule } from 'primeng/table';
// import { DialogModule } from 'primeng/dialog';
// import { MessagesModule } from 'primeng/messages';
// import { CalendarModule } from 'primeng/calendar';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { ConfirmationService } from 'primeng/api';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [ButtonModule, CarouselModule, TableModule, DialogModule, MessagesModule, CalendarModule, CommonModule, HttpClientModule],
//   providers: [ConfirmationService],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   constructor(
//     private router: Router,
//     private confirmationService: ConfirmationService
//   ) {}

//   loginAluno() {
//     this.router.navigate(['/login-form']);
//   }

//   cadastroAluno() {
//     this.router.navigate(['/register']);
//   }


// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginAluno(): void {
    this.router.navigate(['/login-form']);
  }

  cadastroAluno(): void {
    this.router.navigate(['/register']);
  }

  public loginCards = [
  {
    title: 'Já sou aluno',
    subtitle: 'Entrar na área do aluno',
    button: 'Entrar',
    color: 'card-blue',
    icon: 'pi pi-user',
    action: () => this.loginAluno()
  },
  {
    title: 'Não sou aluno',
    subtitle: 'Realizar cadastro',
    button: 'Cadastrar',
    color: 'card-yellow',
    icon: 'pi pi-user-plus',
    action: () => this.cadastroAluno()
  }
];

}