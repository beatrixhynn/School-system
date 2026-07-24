import { Component } from '@angular/core';
import { SectionTitleComponent } from '../shared/section-title/section-title.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SectionTitleComponent, ScheduleCardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
