import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  image: string;
  title: string;
  size?: string;
}

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {


  photos: GalleryItem[] = [

    {
      image: 'assets/pexels-kseniachernaya-8535220.jpg',
      title: 'Aprendendo',
      size: 'size-tall'
    },

    {
      image: 'assets/bonito-garoto-astronauta-jogando.jpg',
      title: 'Sonhando'
    },

    {
      image: 'assets/desenho.jpg',
      title: 'Criando'
    },

    {
      image: 'assets/pexels-yankrukov-8613318.jpg',
      title: 'Juntos',
      size: 'size-wide'
    },

    {
      image: 'assets/pexels-yankrukov-8612955.jpg',
      title: 'Crescendo'
    },

    {
      image: 'assets/pexels-cottonbro-3662648.jpg',
      title: 'Expressando',
      size: 'size-tall'
    },

    {
      image: 'assets/pexels-goumbik-296308.jpg',
      title: 'Descobrindo'
    },

    {
      image: 'assets/pexels-h-ng-xuan-vien-1346154-2869318.jpg',
      title: 'Explorando'
    },

    {
      image: 'assets/pexels-ivan-s-6816479.jpg',
      title: 'Brincando',
      size: 'size-wide'
    },

    {
      image: 'assets/pexels-kelvinocta16-1096147.jpg',
      title: 'Brilhando'
    },

    {
      image: 'assets/pexels-kseniachernaya-8535599.jpg',
      title: 'Escrevendo'
    },

    {
      image: 'assets/pexels-pixmike-998067.jpg',
      title: 'Sentindo'
    },

    {
      image: 'assets/pexels-yankrukov-8613059.jpg',
      title: 'Conquistando',
      size: 'size-tall'
    },

    {
      image: 'assets/pexels-kseniachernaya-8535230.jpg',
      title: 'Colorindo'
    },

    {
      image: 'assets/pexels-cottonbro-3662707.jpg',
      title: 'Celebrando',
      size: 'size-wide'
    },

    {
      image: 'assets/pintura.jpg',
      title: 'Pintando'
    },

    {
      image: 'assets/pexels-mikhail-nilov-8923877.jpg',
      title: 'Pesquisando'
    },

    {
      image: 'assets/escolinha.jpg',
      title: 'Nossa Escola'
    },

    {
      image: 'assets/school.jpg',
      title: 'Nossa Turma',
      size: 'size-wide'
    }

  ];

}