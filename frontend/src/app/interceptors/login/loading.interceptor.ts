import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from '../../shared/loading/services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

//   const loadingService = inject(LoadingService);

//   console.log('SHOW');

//   loadingService.show();

//   return next(req).pipe(
//     finalize(() => {
//       console.log('HIDE');
//       loadingService.hide();
//     })
//   );

  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    // delay(1000), // apenas para teste
    finalize(() => loadingService.hide())
  );

};
