import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [WaveDividerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Output() knowMore = new EventEmitter<void>();


  constructor(
    private router: Router
  ){}


  goToAbout(){

    this.router.navigateByUrl('/about-us');

  }
  

}