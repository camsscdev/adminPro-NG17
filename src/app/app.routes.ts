import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((x) => x.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (x) => x.RegisterComponent
      ),
  },

  {
    path: '',
    loadComponent: () =>
      import('./pages/pages.component').then((x) => x.PagesComponent),
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (x) => x.DashboardComponent
          ),
      },

      {
        path: 'progress',
        loadComponent: () =>
          import('./pages/progress/progress.component').then(
            (x) => x.ProgressComponent
          ),
      },
      {
        path: 'grafica1',
        loadComponent: () =>
          import('./pages/grafica1/grafica1.component').then(
            (x) => x.Grafica1Component
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/nopagefound/nopagefound.component').then(
        (x) => x.NopagefoundComponent
      ),
  },
];
