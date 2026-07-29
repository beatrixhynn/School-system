import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  // constructor(public loadingService: LoadingService) {}

  constructor(public loadingService: LoadingService) {

  this.loadingService.loading$.subscribe(value => {
    console.log('LOADING:', value);
  });

}

}