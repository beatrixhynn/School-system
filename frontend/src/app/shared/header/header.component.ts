import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MenuItem, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { LoginService } from '../../auth/login/service/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TieredMenuModule,
    SidebarModule,
    DialogModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('tieredMenu')
  tieredMenu: any;

  public menuItems: MenuItem[] = [];
  public adminItems: MenuItem[] = [];

  public menuVisible = false;
  public isScrolled = false;
  public showLogoutDialog = false;

  constructor(
    private router: Router,
    public loginService: LoginService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createMenus();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  private createMenus(): void {

    this.menuItems = [
      {
        label: 'Home',
        routerLink: '/main-menu'
      },
      {
        label: 'Quem Somos',
        routerLink: '/about-us'
      },
      {
        label: 'Galeria',
        routerLink: '/gallery-page'
      },
      {
        label: 'Horários/Contato',
        routerLink: '/contact-us'
      }
    ];

    this.adminItems = [
      {
        label: 'Aluno',
        icon: 'pi pi-user',
        command: () => this.navigate('students')
      },
      {
        label: 'Professor',
        icon: 'pi pi-id-card',
        command: () => this.navigate('teachers')
      },
      {
        label: 'Turma',
        icon: 'pi pi-users',
        command: () => this.navigate('grades')
      },
      {
        label: 'Refeição',
        icon: 'pi pi-apple',
        command: () => this.navigate('school-meals')
      }
    ];
  }

  private navigate(route: string): void {
    this.router.navigateByUrl(route);
    this.menuVisible = false;
  }

  toggleTieredMenu(event: Event): void {
    this.tieredMenu?.toggle(event);
  }

  openWhatsApp(): void {
    window.open('https://wa.me/5511999999999', '_blank');
  }

  logout(): void {
    this.showLogoutDialog = true;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  confirmLogout(): void {

    localStorage.clear();

    this.showLogoutDialog = false;
    this.menuVisible = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Até logo!',
      detail: 'Logout realizado com sucesso.'
    });

    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1000);

  }

}