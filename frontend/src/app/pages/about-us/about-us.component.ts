import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBlockComponent } from './components/about-block/about-block.component';
import { WaveBannerComponent } from './components/wave-banner/wave-banner.component';
import { ThreeColumnsComponent } from '../../layout/three-columns/three-columns.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    AboutBlockComponent,
    WaveBannerComponent,
    ThreeColumnsComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {}