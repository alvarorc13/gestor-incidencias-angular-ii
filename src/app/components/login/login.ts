import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  login() {
    if (this.loginForm.invalid) {
      Swal.fire({ title: 'Error', text: 'Acceso denegado' });
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
        Swal.fire({ title: 'Bienvenido', text: 'Acceso concedido', timer: 1000 });
      },
      error: () => Swal.fire({ title: 'Error', text: 'Error inesperado' }),
    });
  }
}
