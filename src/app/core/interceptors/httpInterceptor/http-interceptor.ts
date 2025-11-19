import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServices } from '../../services/authServices/auth-services'; 

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthServices)
  const getAccessToken = authService.getToken()
  if (getAccessToken){
    const cloneReq =req.clone({
      setHeaders:{
        Authorization :`Bearer ${getAccessToken}`
      }
    })
    return next(cloneReq)
  }
  return next(req);
};
