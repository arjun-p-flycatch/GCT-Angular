import { Routes } from '@angular/router';
import { DashboardTemplate } from './shared/components/dashboard-template/dashboard-template';
import { Dashboard } from './pages/dashboard/dashboard';
import { Staff } from './pages/staff/staff';
import { Bookings } from './pages/bookings/bookings';
import { Customers } from './pages/customers/customers';
import { Branches } from './pages/branches/branches';
import { Reports } from './pages/reports/reports';
import { Login } from './pages/login/login';
import { authGuard } from './core/guard/authGuard/auth-guard';
import { publicGuard } from './core/guard/publicGuard/public-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DashboardTemplate,
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
      { path: 'staffs', component: Staff, canActivate: [authGuard] },
      { path: 'bookings', component: Bookings, canActivate: [authGuard] },
      { path: 'customers', component: Customers, canActivate: [authGuard] },
      { path: 'branches', component: Branches, canActivate: [authGuard] },
      { path: 'reports', component: Reports, canActivate: [authGuard] },
    ],
  },
  { path: 'login', component: Login, canActivate: [publicGuard] },
];
