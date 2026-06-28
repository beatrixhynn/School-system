import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MessageService } from 'primeng/api';
import { FooterComponent } from './footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  constructor(private router: Router) {
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

