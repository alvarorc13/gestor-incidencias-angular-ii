import { inject, Injectable, signal } from '@angular/core';
import { Incidence, NewIncidence } from '../interfaces/incidencia';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService {
  private _incidencias = signal<Incidence[]>([]);
  incidencias = this._incidencias.asReadonly();
  private http = inject(HttpClient);
  private APIBase = 'http://localhost:3001';
  private authService = inject(AuthService);
  private router = inject(Router)

  constructor() {
    this.fetchIncidencias();
  }

  fetchIncidencias() {
    return this.http.get<Incidence[]>(`${this.APIBase}/incidences`).subscribe({
      next: (response) => {
        this._incidencias.set(response);
      },
      error: (error) => {
        Swal.fire({ title: 'fallo', text: 'la cagaste' });
      },
    });
  }

  addIncidence(newIncidence: NewIncidence) {
    this.http.post<Incidence>(`${this.APIBase}/incidences`, newIncidence).subscribe({
      next: (response) => {this._incidencias.update((prev) => [...prev, response])
        this.router.navigate(['/dashboard'])
      },
      error: () => Swal.fire({ title: 'Error', text: 'Error al añadir la incidencia' }),
    });
  }
}
