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
import { Services } from './pages/services/services';
import { roleGuard } from './core/guard/roleGuard/role-guard';
import { allowedUsers } from './core/constants/menu-constants';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DashboardTemplate,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.staff, allowedUsers.superAdmin] },
      },
      {
        path: 'staffs',
        component: Staff,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.superAdmin] },
      },
      {
        path: 'bookings',
        component: Bookings,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.staff] },
      },
      {
        path: 'services',
        component: Services,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.superAdmin] },
      },
      {
        path: 'customers',
        component: Customers,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.staff] },
      },
      {
        path: 'branches',
        component: Branches,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.superAdmin] },
      },
      {
        path: 'reports',
        component: Reports,
        canActivate: [authGuard, roleGuard],
        data: { allowedState: [allowedUsers.staff, allowedUsers.superAdmin] },
      },
    ],
  },
  { path: 'login', component: Login, canActivate: [publicGuard] },
];
