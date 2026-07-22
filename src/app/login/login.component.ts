import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CarouselModule, TableModule, DialogModule, MessagesModule, CalendarModule, CommonModule, HttpClientModule],
  providers: [ConfirmationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  loginAluno() {
    this.router.navigate(['/login-form']);
  }

  cadastroAluno() {
    this.router.navigate(['/cadastro']);
  }


}
