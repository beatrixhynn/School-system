import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginFormService } from './service/login-form.service';
import { LoginRequest } from '../login/service/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  email = '';
  senha = '';
  erro = '';
  loading = false;
  showPassword = false;

  constructor(
    private loginService: LoginFormService,
    private router: Router
  ) {}

  login(): void {

    console.log("🔥 CLICOU NO LOGIN");

    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    this.loading = true;
    this.erro = '';

    const dados: LoginRequest = {
      email: this.email,
      password: this.senha
    };

    console.log("🔥 DADOS", dados);

    this.loginService.login(dados).subscribe({

      next: (response: any) => {

        console.log("✅ LOGIN OK", response);

        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('email', response.email);

        this.loading = false;

        this.router.navigate(['/main-menu']);
      },

      error: (err) => {

        console.log("❌ ERRO LOGIN", err);

        this.erro = 'Email ou senha inválidos';

        this.loading = false;
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }
}