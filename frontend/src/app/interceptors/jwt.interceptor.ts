import {
  HttpInterceptorFn
} from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  // Não enviar JWT para login e cadastro
  const publicRoutes = [
    '/auth/login',
    '/auth/register'
  ];

  if (publicRoutes.some(route => req.url.includes(route))) {
    return next(req);
  }

  return next(req);
};