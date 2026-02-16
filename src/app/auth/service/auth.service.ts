import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = signal<User | null>(null);
  private user = this._user.asReadonly();
  private http = inject(HttpClient);
  private URLBase: string = 'http://localhost:3001';

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this._user.set(jwtDecode<User>(token));
    }
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.URLBase}/auth/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        this._user.set(response.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._user.set(null);
  }
}
