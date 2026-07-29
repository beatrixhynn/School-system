
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContactComponent } from '../footer-contact/footer-contact.component';
import { FooterSocialComponent } from '../footer-social/footer-social.component';
import { FooterFormComponent } from '../footer-form/footer-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FooterContactComponent,
    FooterSocialComponent,
    FooterFormComponent
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}