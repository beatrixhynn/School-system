import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../../app/cadastro/service/cadastro.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  email = '';
  password = '';


constructor(
  private cadastroService: CadastroService,
  private router: Router
) {}

  cadastrar() {

    const dados = {
      email: this.email,
      password: this.password
    };

    this.cadastroService.register(dados)
      .subscribe({

        next: () => {

          alert('Conta criada com sucesso!');

          this.router.navigate(['/login-form']);
        },

        error: (err: any) => {

          console.error(err);

          alert('Erro ao cadastrar usuário');
        }
      });
  }

    voltar() {
    this.router.navigate(['/login']);
  }
}