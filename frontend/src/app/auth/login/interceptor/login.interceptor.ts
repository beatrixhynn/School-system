import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {


//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token'); // ✅ NÃO usa LoginService

//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     return next.handle(req);
//   }
// }

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = localStorage.getItem('token');

    if (token) {

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}