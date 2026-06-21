

import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login/service/login.service';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, TieredMenuModule, SidebarModule, RouterModule, ToastModule, CommonModule, MenuModule, RouterLinkActive, ConfirmDialogModule, DialogModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];
  item: MenuItem[] = [];
  menuVisible = false;
  isScrolled = false;

  @ViewChild('tieredMenu') tieredMenu: any;

  showLogoutDialog = false;


  constructor(private router: Router, public loginService: LoginService,
      private messageService: MessageService
  ) { }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
  ngOnInit() {

    // ── Links do menu desktop / sidebar ──────
    this.item = [
      { label: 'Home', routerLink: '/main-menu' },
      { label: 'Quem Somos', routerLink: '/about-us' },
      { label: 'Galeria', routerLink: '/gallery-page' },
      { label: 'Horários/Contato', routerLink: '/contact-us' },
    ];

    // ── Itens do menu admin ───────────────────
    this.items = [
      {
        label: 'Aluno',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.router.navigateByUrl('students');
          this.menuVisible = false;
        }
      },
      {
        label: 'Professor',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.router.navigateByUrl('teachers');
          this.menuVisible = false;
        }
      },
      {
        label: 'Turma',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl('grades');
          this.menuVisible = false;
        }
      },
      {
        label: 'Refeição',
        icon: 'pi pi-fw pi-apple',
        command: () => {
          this.router.navigateByUrl('school-meals');
          this.menuVisible = false;
        }
      },
    ];
  }
  toggleTieredMenu(event: Event) {
    this.tieredMenu?.toggle(event);
  }

  goToHome(): void {
    this.router.navigateByUrl('/main-menu');
  }

  openWhatsApp(): void {
    window.open('https://wa.me/5511999999999', '_blank');
  }
  logout(): void {

    this.showLogoutDialog = true;
    // localStorage.removeItem('token');

    // this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


confirmLogout() {
  localStorage.clear();
  this.showLogoutDialog = false;
  this.menuVisible = false; // ← fecha menu mobile
  this.messageService.add({
    severity: 'success',
    summary: 'Até logo!',
    detail: 'Logout realizado com sucesso.'
  });
  setTimeout(() => this.router.navigate(['']), 1000); // ← espera o toast aparecer
}
}