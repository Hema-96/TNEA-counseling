export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon: string;
  children?: MenuItem[];
}

export interface MenuConfig {
  [role: number]: MenuItem[];
}

export const menuConfig: MenuConfig = {
  // Admin Menu (role: 1)
  1: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: 'Home'
    },
    {
      id: 'colleges',
      title: 'Colleges',
      path: '/admin/colleges',
      icon: 'Building2'
    },
    {
      id: 'students',
      title: 'Students',
      path: '/admin/students',
      icon: 'GraduationCap'
    }
  ],

  // Student Menu (role: 2)
  2: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      path: '/student/dashboard',
      icon: 'Home'
    },
    {
      id: 'programs',
      title: 'Programs',
      path: '/student/programs',
      icon: 'FileText'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      path: '/student/appointments',
      icon: 'Calendar'
    },
    {
      id: 'profile',
      title: 'Profile',
      path: '/student/profile',
      icon: 'UserCheck'
    },
    {
      id: 'settings',
      title: 'Settings',
      path: '/student/settings',
      icon: 'Settings'
    }
  ],

  // College Menu (role: 3)
  3: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      path: '/college/dashboard',
      icon: 'Home'
    },
    {
      id: 'students',
      title: 'Student Management',
      path: '/college/students',
      icon: 'GraduationCap'
    },
    {
      id: 'reports',
      title: 'Reports',
      path: '/college/reports',
      icon: 'BarChart3'
    },
    {
      id: 'settings',
      title: 'Settings',
      path: '/college/settings',
      icon: 'Settings'
    }
  ]
};

export const getMenuItems = (role: number): MenuItem[] => {
  return menuConfig[role] || [];
}; 