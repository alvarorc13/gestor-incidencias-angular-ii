import { Component, inject } from '@angular/core';
import { IncidenciaService } from '../../services/incidencias.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard-component',
  imports: [NgClass],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  private incidenciasService = inject(IncidenciaService);
  incidences = this.incidenciasService.incidencias();
}
