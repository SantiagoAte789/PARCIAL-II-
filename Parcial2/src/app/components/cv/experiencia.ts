import { Component } from '@angular/core';
import { EXPERIENCIA } from '../../data/cv.data';

@Component({
  selector: 'app-experiencia',
  template: `
    <section class="card border-0 shadow-sm"><div class="card-body">
      <h2 class="h5 section-title">Experiencia y proyectos</h2>
      <div class="row g-3">
        @for (e of experiencia; track e.titulo) {
          <div class="col-md-6"><div class="border rounded p-3 h-100">
            <h3 class="h6">{{ e.titulo }}</h3>
            <p class="small text-muted">{{ e.descripcion }}</p>
            @for (t of e.tecnologias; track t) { <span class="badge text-bg-dark me-1">{{ t }}</span> }
          </div></div>
        }
      </div>
    </div></section>`
})
export class Experiencia { experiencia = EXPERIENCIA; }
