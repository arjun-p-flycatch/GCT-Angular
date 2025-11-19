import { CanActivateFn } from '@angular/router';
import { AuthServices } from '../../services/authServices/auth-services';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    return router.navigate(['/login']);
  }
};
