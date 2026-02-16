import { Routes } from '@angular/router';
import { SubscribeComponent } from './components/subscribe-component/subscribe-component';
import { UsernameComponent } from './components/username-component/username-component';

export const routes: Routes = [
  { path: 'ejer1', component: SubscribeComponent },
  { path: 'ejer2', component: UsernameComponent }
];
