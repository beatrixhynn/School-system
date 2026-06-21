import { Component, HostListener, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { ThreeColumnsComponent } from '../three-columns/three-columns.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MainMenuComponent,
    ButtonModule,
    CarouselModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    MessagesModule,
    CalendarModule,
    ThreeColumnsComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

//   private observer!: IntersectionObserver;

// private scrollY = 0;

//   @HostListener('window:scroll')
//   onScroll() {
//     this.scrollY = window.scrollY;
//     this._updateBlobs();
//   }

//   private _updateBlobs() {
//     const blobs = document.querySelectorAll<HTMLElement>('.blob');
//     blobs.forEach((blob, i) => {
//       const dir = i % 2 === 0 ? 1 : -1;
//       const offset = this.scrollY * 0.08 * dir;
//       blob.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
//     });
//   }

//   openWhatsApp() {
//     window.open('https://wa.me/5511999999999', '_blank');
//   }

//   ngOnInit() {}
// }
private observer!: IntersectionObserver;
  private scrollY = 0;

  ngOnInit() {
    this._initScrollObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private _initScrollObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target); // anima só uma vez
          }
        });
      },
      { threshold: 0.2 } // dispara quando 20% do bloco aparecer
    );

    // observa todos os .about-block
    setTimeout(() => {
      document.querySelectorAll('.about-block').forEach(el => {
        this.observer.observe(el);
      });
    }, 100);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
    this._updateBlobs();
  }

  private _updateBlobs() {
    const blobs = document.querySelectorAll<HTMLElement>('.blob');
    blobs.forEach((blob, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      const offset = this.scrollY * 0.08 * dir;
      blob.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    });
  }

  openWhatsApp() {
    window.open('https://wa.me/5511999999999', '_blank');
  }
}