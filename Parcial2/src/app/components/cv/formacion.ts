import { Component } from '@angular/core';
import { FORMACION } from '../../data/cv.data';

@Component({
  selector: 'app-formacion',
  template: `
    <section class="card border-0 shadow-sm h-100"><div class="card-body">
      <h2 class="h5 section-title">Formación académica</h2>
      @for (f of formacion; track f.titulo) {
        <div class="d-flex justify-content-between align-items-start border-bottom py-2">
          <div><strong>{{ f.titulo }}</strong>
            <div class="small text-muted">{{ f.institucion }}@if (f.detalle) { · {{ f.detalle }} }</div></div>
          <span class="badge" [class.text-bg-success]="f.estado === 'Graduado'" [class.text-bg-warning]="f.estado === 'En curso'">{{ f.estado }}</span>
        </div>
      }
    </div></section>`
})
export class Formacion { formacion = FORMACION; }
