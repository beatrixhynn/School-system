

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