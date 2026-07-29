// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterOutlet } from '@angular/router';
// import { MessageService } from 'primeng/api';

// import { HeaderComponent } from './shared/header/header.component';
// import { FooterComponent } from './shared/footer/footer/footer.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     CommonModule,
//     HeaderComponent,
//     RouterOutlet,
//     FooterComponent
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   providers: [MessageService]
// })
// export class AppComponent {

//   constructor(public router: Router) {}

// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { filter } from 'rxjs/operators';

import { MessageService } from 'primeng/api';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {

  showLayout = true;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.showLayout = !route.snapshot.data['hideLayout'];

      });

  }

}