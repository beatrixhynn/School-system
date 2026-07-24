import { Component } from '@angular/core';


interface Schedule {
  type: string;
  className: string;
  times: string[];
}


@Component({
  selector: 'app-schedule-card',
  standalone: true,
  templateUrl: './schedule-card.component.html',
  styleUrl: './schedule-card.component.scss'
})
export class ScheduleCardComponent {


  schedules: Schedule[] = [

    {
      type: 'Regular',
      className: 'regular',
      times: [
        'Manhã: 7h20 às 12h',
        'Tarde: 13h20 às 18h'
      ]
    },


    {
      type: 'Parcial',
      className: 'parcial',
      times: [
        '7h às 16h',
        '9h30 às 18h'
      ]
    },


    {
      type: 'Integral',
      className: 'integral',
      times: [
        '7h às 18h'
      ]
    }

  ];

}