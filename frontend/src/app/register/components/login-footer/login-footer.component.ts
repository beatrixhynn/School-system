import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-footer',
  standalone: true,
  templateUrl: './login-footer.component.html',
  styleUrl: './login-footer.component.scss'
})
export class LoginFooterComponent {

  @Output() back = new EventEmitter<void>();

}