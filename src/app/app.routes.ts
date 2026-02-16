import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { Login } from './components/login/login';
import { NewIncidenceComponent } from './components/new-incidence-component/new-incidence-component';

export const routes: Routes = [
    {path: 'auth/login', component: Login},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/nueva', component: NewIncidenceComponent},
];
