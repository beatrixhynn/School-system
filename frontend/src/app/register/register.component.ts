

import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertBannerComponent } from './components/alert-banner/alert-banner.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { RegisterService } from './service/register.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoginHeaderComponent,
    AlertBannerComponent,
    LoginFooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


@Injectable({
  providedIn: 'root'
})

export class RegisterComponent {

  email = '';
  password = '';

  erro = '';
  sucesso = '';

  loading = false;
  showPassword = false;

  constructor(
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) { }

  cadastrar(): void {
    console.log({
      email: this.email,
      password: this.password
    });
    this.limparMensagens();

    if (!this.senhaValida()) {
      return;
    }

    this.loading = true;

    this.registerService.register({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => this.registroSucesso(),
      error: (err: any) => this.registroErro(err)

    });
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }

  private senhaValida(): boolean {
    if (this.password.length >= 6) {
      return true;
    }

    this.erro = 'A senha deve ter no mínimo 6 caracteres';
    return false;
  }

  private limparMensagens(): void {
    this.erro = '';
    this.sucesso = '';
  }

  private registroSucesso(): void {
    this.sucesso = 'Conta criada com sucesso! Redirecionando...';
    this.loading = false;

    setTimeout(() => {
      this.router.navigate(['/login-form']);
    }, 1500);
  }

  private registroErro(err: any): void {
    this.erro =
      err?.error?.error ?? 'Erro ao cadastrar. Tente novamente.';

    this.loading = false;
  }


}