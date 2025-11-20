import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthServices } from '../../services/authServices/auth-services';
interface RoleData {
  allowedState: string[];
}
export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices);
  const router = inject(Router);
  const userRole = (authService.getRole() as string)?.toLowerCase() || null;
  const routeData = route.data as RoleData;
  if (!routeData.allowedState) {
    return true;
  }
  if (userRole && routeData.allowedState.includes(userRole)) 
    {return true};
  return router.navigate(['/dashboard']);
};
