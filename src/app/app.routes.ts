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
        data: { titulo: 'Tablero' },
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (x) => x.DashboardComponent
          ),
      },

      {
        path: 'progress',
        data: { titulo: 'Barra progreso' },
        loadComponent: () =>
          import('./pages/progress/progress.component').then(
            (x) => x.ProgressComponent
          ),
      },
      {
        path: 'grafica1',
        data: { titulo: 'Grafica' },
        loadComponent: () =>
          import('./pages/grafica1/grafica1.component').then(
            (x) => x.Grafica1Component
          ),
      },
      {
        path: 'settings',
        data: { titulo: 'Configuracioness' },
        loadComponent: () =>
          import('./pages/account-settings/account-settings.component').then(
            (x) => x.AccountSettingsComponent
          ),
      },
      {
        path: 'promises',
        data: { titulo: 'Promesas' },
        loadComponent: () =>
          import('./pages/promises/promises.component').then(
            (x) => x.PromisesComponent
          ),
      },
      {
        path: 'rxjs',
        data: { titulo: 'Rxjs' },
        loadComponent: () =>
          import('./pages/rxjs/rxjs.component').then((x) => x.RxjsComponent),
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
