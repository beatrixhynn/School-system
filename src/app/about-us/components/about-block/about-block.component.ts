import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-block.component.html',
  styleUrl: './about-block.component.scss'
})
export class AboutBlockComponent {

  @Input() eyebrow = '';
  @Input() title = '';
  @Input() strong = '';
  @Input() subtitle = '';
  @Input() text = '';
  @Input() image = '';
  @Input() reverse = false;
  @Input() blobColor: 'blue' | 'yellow' = 'blue';

}