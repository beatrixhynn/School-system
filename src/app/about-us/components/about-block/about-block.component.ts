// about-block.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-block',
  standalone: true,
  templateUrl: './about-block.component.html',
  styleUrl: './about-block.component.scss'
})
export class AboutBlockComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() highlight = '';
  @Input() subtitle = '';
  @Input() text = '';
  @Input() image = '';
  @Input() blobColor: 'blue' | 'yellow' = 'blue';
  @Input() reverse = false;
}