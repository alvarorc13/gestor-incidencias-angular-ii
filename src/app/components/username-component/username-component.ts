import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-username-component',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './username-component.html',
  styleUrl: './username-component.css',
})
export class UsernameComponent {
  private fb: FormBuilder = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
  });

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  sinEspacios() {
    
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    console.log(errors);
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `El campo ${field} es requerido`;
        default:
          return 'Dato no valido';
      }
    }
    return null;
  }
}
