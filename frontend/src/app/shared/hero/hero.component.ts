import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {


  constructor(
    private router: Router
  ){}


  goToAbout(){

    this.router.navigateByUrl('/about-us');

  }

}