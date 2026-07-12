import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images = [
    {
      src: 'assets/desenho.jpg',
      alt: 'Desenho feito pelos alunos'
    },
    {
      src: 'assets/amigos-de-turma-sacola-educacao-escolar.jpg',
      alt: 'Amigos de turma'
    },
    {
      src: 'assets/bonito-garoto-astronauta-jogando.jpg',
      alt: 'Aluno brincando de astronauta'
    }
  ];

  constructor(
    private router: Router
  ) {}

  toKnowMore(): void {
    this.router.navigateByUrl('/gallery-page');
  }

}