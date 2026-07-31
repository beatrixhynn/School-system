import {
  HttpInterceptorFn
} from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('JWT INTERCEPTOR');

  const publicRoutes = [
    '/auth/login',
    '/auth/register'
  ];

  if (publicRoutes.some(route => req.url.includes(route))) {
    return next(req);
  }

  return next(req);
};