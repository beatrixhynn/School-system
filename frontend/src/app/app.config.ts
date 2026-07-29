
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './interceptors/jwt/jwt.interceptor';
import { loadingInterceptor } from './interceptors/login/loading.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(
    withFetch(),
    withInterceptors([
        loadingInterceptor,
        jwtInterceptor
    ])
),
provideAnimations()
  ]
};