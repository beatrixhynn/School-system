import { Component } from '@angular/core';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ScheduleCardComponent, SectionTitleComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
