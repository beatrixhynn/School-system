import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [ButtonModule, CarouselModule, CommonModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MessagesModule,
    CalendarModule, AboutUsComponent, GalleryComponent, ContactUsComponent],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('bercarioContent', { static: false }) bercarioContent?: ElementRef<HTMLElement>;
  @ViewChild('bercarioImg', { static: false }) bercarioImg?: ElementRef<HTMLImageElement>;
  @ViewChild('scatterImg', { static: false }) scatterImg?: ElementRef<HTMLImageElement>;

  private rafScheduled = false;
  private baseScatter = -42.06; 

  images: string[] = [

  ];

  constructor(private router: Router) { }

  carouselImages: { src: string; alt: string }[] = [];
  logout(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('role');

    window.location.href = '/login';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updatePositions();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.scrollHandler);
  }

  private scrollHandler = () => this.scheduleUpdate();

  ngOnDestroy(): void {
    try {
      window.removeEventListener('scroll', this.scrollHandler);
      window.removeEventListener('resize', this.scrollHandler);
    } catch (e) {
  
    }
  }

  private scheduleUpdate(): void {
    if (!this.rafScheduled) {
      this.rafScheduled = true;
      requestAnimationFrame(() => {
        this.updatePositions();
        this.rafScheduled = false;
      });
    }
  }

  private updatePositions(): void {
    try {
      if (!this.bercarioContent) return;
      const rect = this.bercarioContent.nativeElement.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));

      const move = progress * 30; 

      const scatterOffset = this.baseScatter + move * 0.6; 
      const bercarioOffset = move * 0.18; 

      if (this.scatterImg && this.scatterImg.nativeElement) {
        this.scatterImg.nativeElement.style.transform = `translateY(${scatterOffset}px)`;
      }

      if (this.bercarioImg && this.bercarioImg.nativeElement) {
        this.bercarioImg.nativeElement.style.transform = `translateY(${bercarioOffset}px)`;
      }
    } catch (e) {
    }
  }

  ToKnowMore(): void {
    this.router.navigateByUrl('/about-us')
  }
}
