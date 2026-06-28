

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CadastroService } from '../../app/cadastro/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  email = '';
  password = '';
  erro = '';
  sucesso = '';
  loading = false;
  showPassword = false;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    this.erro = '';
    this.sucesso = '';

    if (this.password.length < 6) {
      this.erro = 'A senha deve ter no mínimo 6 caracteres';
      return;
    }

    this.loading = true;

    this.cadastroService.register({ email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this.sucesso = 'Conta criada com sucesso! Redirecionando...';
          this.loading = false;
          setTimeout(() => this.router.navigate(['/login-form']), 1500);
        },
        error: (err: any) => {
          this.erro = err?.error?.error || 'Erro ao cadastrar. Tente novamente.';
          this.loading = false;
        }
      });
  }

  voltar() {
    this.router.navigate(['/login']);
  }
}