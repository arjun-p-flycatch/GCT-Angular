import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { sideBarItems } from '../../../../core/constants/menu-constants';
import { AuthServices } from '../../../../core/services/authServices/auth-services';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sideBarItems = sideBarItems;
  private authService = inject(AuthServices);
  userRole: 'super_admin' | 'staff' | null = this.authService.getRole();;
   
  constructor(private router: Router) {}


  isActive(sideBarItems: any): boolean {
    return sideBarItems.path.includes(this.router.url);
  }
  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
