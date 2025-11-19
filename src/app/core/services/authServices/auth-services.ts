import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }
  isAuthenticated(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
