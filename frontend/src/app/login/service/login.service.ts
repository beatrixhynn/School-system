import { Injectable, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  role: string;
  token: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // 🔥 corrigido com /school
  private apiUrl = 'http://localhost:8080/school/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', res.email);
          // 🔥 ESSA LINHA É NOVA
          localStorage.setItem('role', res.role);
        }
      })
    );
  }

  // LOGOUT
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    }

    this.router.navigate(['/login']);
  }

  // PEGAR TOKEN
  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('token');
  }

  // PEGAR EMAIL
  getEmail(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('email');
  }

  // VERIFICAR LOGIN
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  getRole(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('role');
  }

  isAdmin(): boolean {
    const role = this.getRole();
    return role === 'ADMIN';
  }

  isPai(): boolean {
    return this.getRole() === 'PAI';
  }
}