import {
  Component,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-about-block',
  standalone: true,
  templateUrl: './about-block.component.html',
  styleUrl: './about-block.component.scss'
})
export class AboutBlockComponent implements OnInit, OnDestroy {

  private observer!: IntersectionObserver;
  private scrollY = 0;

  ngOnInit() {
    this.initScrollObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private initScrollObserver() {

    this.observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          this.observer.unobserve(entry.target);

        }

      });

    }, { threshold: 0.2 });

    setTimeout(() => {

      document.querySelectorAll('.about-block')
        .forEach(el => this.observer.observe(el));

    });

  }

  @HostListener('window:scroll')

  onScroll() {

    this.scrollY = window.scrollY;

    this.updateBlobs();

  }

  private updateBlobs() {

    document.querySelectorAll<HTMLElement>('.blob')
      .forEach((blob, i) => {

        const dir = i % 2 === 0 ? 1 : -1;

        const offset = this.scrollY * 0.08 * dir;

        blob.style.transform =
          `translate(-50%, calc(-50% + ${offset}px))`;

      });

  }

}