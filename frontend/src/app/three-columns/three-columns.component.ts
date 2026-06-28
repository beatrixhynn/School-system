import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  icon: string;
  title: string;
  text: string;
  btnLabel: string;
  colorClass: string;
}

@Component({
  selector: 'app-three-columns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-columns.component.html',
  styleUrls: ['./three-columns.component.scss']
})
export class ThreeColumnsComponent {
  cards: Card[] = [
    {
      icon: '📖',
      title: 'Aulas Dinâmicas',
      text: 'Nossas aulas são pensadas para tornar o aprendizado divertido e envolvente. Conteúdos modernos que despertam a curiosidade de cada aluno.',
      btnLabel: 'Ver Aulas',
      colorClass: 'blue'
    },
    {
      icon: '🏆',
      title: 'Atividades & Jogos',
      text: 'Aprender brincando é a nossa proposta! Jogos educativos, desafios e atividades em grupo que desenvolvem habilidades com alegria.',
      btnLabel: 'Explorar',
      colorClass: 'yellow'
    },
    {
      icon: '🤝',
      title: 'Nossa Equipe',
      text: 'Professores dedicados e apaixonados pela educação, prontos para acompanhar cada aluno em sua jornada de crescimento e descoberta.',
      btnLabel: 'Conhecer',
      colorClass: 'green'
    }
  ];
}