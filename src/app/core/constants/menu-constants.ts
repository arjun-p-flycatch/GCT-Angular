export const allowedUsers = {
  superAdmin: 'super_admin',
  staff: 'staff',
};
export const sideBarItems = [
  {
    item: 'Dashboard',
    icon: '/icons/dashboard-black.svg',
    iconActive: '/icons/dashboard-white.svg',
    path: ['/dashboard', '/profile-info'],
    allowedUser: [allowedUsers.staff, allowedUsers.superAdmin],
  },
  {
    item: 'Branches',
    icon: '/icons/branches-black.svg',
    iconActive: '/icons/branches-white.svg',
    path: ['/branches'],
    allowedUser: [allowedUsers.superAdmin],
  },
  {
    item: 'Services',
    icon: '/icons/services.svg',
    iconActive: '/icons/services-white.svg',
    path: ['/services'],
    allowedUser: [allowedUsers.superAdmin],
  },
  {
    item: 'Staffs',
    icon: '/icons/staff-black.svg',
    iconActive: '/icons/staff-white.svg',
    path: ['/staffs'],
    allowedUser: [allowedUsers.superAdmin],
  },
  {
    item: 'Customers',
    icon: '/icons/customers-black.svg',
    iconActive: '/icons/customers-white.svg',
    path: ['/customers'],
    allowedUser: [allowedUsers.staff],
  },
  {
    item: 'Bookings',
    icon: '/icons/bookings-black.svg',
    iconActive: '/icons/bookings-white.svg',
    path: ['/bookings'],
    allowedUser: [allowedUsers.staff],
  },
  {
    item: 'Reports',
    icon: '/icons/reports-black.svg',
    iconActive: '/icons/reports-white.svg',
    path: ['/reports'],
    allowedUser: [allowedUsers.staff, allowedUsers.superAdmin],
  },
];
