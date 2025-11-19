import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../../services/authServices/auth-services';
import { inject } from '@angular/core';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/dashboard']);
    return false;
  }
};
