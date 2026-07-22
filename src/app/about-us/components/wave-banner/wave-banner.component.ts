import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wave-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-banner.component.html',
  styleUrl: './wave-banner.component.scss'
})
export class WaveBannerComponent {

  openWhatsApp() {
    window.open('https://wa.me/5511999999999', '_blank');
  }
}