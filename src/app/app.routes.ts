import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { Login } from './components/login/login';
import { NewIncidenceComponent } from './components/new-incidence-component/new-incidence-component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'auth/login', component: Login},
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {path: 'dashboard/nueva', component: NewIncidenceComponent, canActivate: [authGuard]},
];
