import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { IncidenciaService } from '../../services/incidencias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NewIncidence } from '../../interfaces/incidencia';

@Component({
  selector: 'app-new-incidence-component',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './new-incidence-component.html',
  styleUrl: './new-incidence-component.css',
})
export class NewIncidenceComponent {
  private fb = inject(FormBuilder);
  private incidenceService = inject(IncidenciaService);
  private router = inject(Router);

  newIncidenceForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    priority: ['Baja', Validators.required],
    description: ['', Validators.required]
  });

  isNotValidField(field: string) {
    return (
      this.newIncidenceForm.controls[field].errors && this.newIncidenceForm.controls[field].touched
    );
  }

  getFieldErrors(field: string) {
    if (!this.newIncidenceForm.controls[field]) {
      return null;
    }
    const errors = this.newIncidenceForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo debe ser rellenado';
        case 'minlength':
          return `El campo debe tener como minimo: ${errors['minlength'].requiredLength}`;
        default:
          return null;
      }
    }
    return null;
  }

  onSubmit() {
    if (!this.newIncidenceForm.valid) {
      Swal.fire({ title: 'Error', text: 'Formulario incorrecto' });
      return;
    }
    this.incidenceService.addIncidence(this.newIncidenceForm.value)
  }
}
