import { Injectable, inject } from '@angular/core';
import { ApiServices } from '../api/api-services';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: 'success' | 'error';
  message: string;
  results: {
    refresh: string;
    access: string;
    user_id: number;
    role: string;
    full_name: string;
  };
  statusCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiService = inject(ApiServices);
  private router = inject(Router)

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.apiService.post<LoginResponse, LoginRequest>('/login/', credentials).pipe(
      tap((response) => {
        if (response.status == 'success' && response.results.access) {
          localStorage.setItem('token', response.results.access);
          localStorage.setItem('role', response.results.role);
          localStorage.setItem('full_name', response.results.full_name);
          this.router.navigate(['/dashboard']);

        }
      })
    );
  }
}
