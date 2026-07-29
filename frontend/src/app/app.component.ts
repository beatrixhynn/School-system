import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  title = 'school-ui';

  mostrarLayout = true;

  constructor(public router: Router) {
    this.router.events.subscribe(() => {
      this.mostrarLayout = this.router.url !== '/';
    });
  }
  showLayout(): boolean {

    const hiddenRoutes = [
      '/login',
      '/login-form',
      '/cadastro',
      '/'
    ];

    return !hiddenRoutes.includes(this.router.url);
  }
}

