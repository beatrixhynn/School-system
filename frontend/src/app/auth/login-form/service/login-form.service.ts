import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface LoginResponse {
  token: string;
  email: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private baseUrl = 'http://localhost:8080/school/auth';

  constructor(private http: HttpClient) {}

//   login(data: any): Observable<LoginResponse> {

//     console.log('🔥 LOGIN SERVICE USADO');

//     return this.http.post<LoginResponse>(
//       `${this.baseUrl}/login`,
//       data
//     ).pipe(
//       tap((response) => {

//         console.log('✅ TOKEN RECEBIDO', response);

//         localStorage.setItem('token', response.token);

//         if (response.role) {
//           localStorage.setItem('role', response.role);
//         }

//       })
//     );
//   }
// }

login(data: any) {

  console.log("🔥 LOGIN SERVICE USADO");

  return this.http.post<any>(
    `${this.baseUrl}/login`,
    data
  );
}
}