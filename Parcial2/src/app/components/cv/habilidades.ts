import { Component } from '@angular/core';
import { HABILIDADES } from '../../data/cv.data';

@Component({
  selector: 'app-habilidades',
  template: `
    <section class="card border-0 shadow-sm mb-4"><div class="card-body">
      <h2 class="h5 section-title">Conocimientos y habilidades</h2>
      <div class="row g-3">
        @for (h of habilidades; track h.nombre) {
          <div class="col-md-6">
            <div class="d-flex justify-content-between small"><span>{{ h.nombre }}</span><span class="text-muted">{{ h.categoria }}</span></div>
            <div class="progress" style="height:8px"><div class="progress-bar bg-danger" [style.width.%]="h.nivel"></div></div>
          </div>
        }
      </div>
    </div></section>`
})
export class Habilidades { habilidades = HABILIDADES; }
