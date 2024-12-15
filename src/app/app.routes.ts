import { Routes } from '@angular/router';
import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'courses',
    children: [
      {
        path: 'create',
        loadComponent: () => import('./features/courses/course-detail/course-detail.component')
      },
      {
        path: ':id',
        loadComponent: () => import('./features/courses/course-detail/course-detail.component')
      }
    ]
  },
];