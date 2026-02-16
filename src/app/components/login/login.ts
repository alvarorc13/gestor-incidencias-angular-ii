import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, SwalComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  @ViewChild('swalSuccess') swalSuccess!: SwalComponent;
  @ViewChild('swalError') swalError!: SwalComponent;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  login() {
    if (this.loginForm.invalid) {
      this.swalError.fire();
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (response) => {
        this.swalSuccess.fire();
        this.router.navigate(['/dashboard']);
      },
      error: (error) => this.swalError.fire(),
    });
  }
}
