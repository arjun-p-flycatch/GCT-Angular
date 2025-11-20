import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  getToken(): string | null {
    return localStorage.getItem('token');
  }
   getRole(): 'super_admin' | 'staff' | null {
    const role = localStorage.getItem('role');
    return role === 'super_admin' || role === 'staff' ? role : null;
  }
  isAuthenticated(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
