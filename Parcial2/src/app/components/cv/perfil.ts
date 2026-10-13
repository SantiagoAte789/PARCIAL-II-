import { Component } from '@angular/core';
import { PERSONA } from '../../data/cv.data';

@Component({
  selector: 'app-perfil',
  template: `
    <section class="card border-0 shadow-sm mb-4 overflow-hidden">
      <div class="bg-dark text-white p-4 p-md-5">
        <div class="d-flex align-items-center gap-3">
          <img src="img/santiago.jpg" [alt]="'Foto de ' + p.nombre" class="rounded-circle border border-3 border-danger object-fit-cover flex-shrink-0" width="110" height="110">
          <div>
            <h1 class="h2 mb-1">{{ p.nombre }}</h1>
            <p class="mb-0 text-white-50">Desarrollador Full Stack en formación · {{ p.edad }} años</p>
            <p class="mb-0 text-white-50"><i class="bi bi-geo-alt"></i> {{ p.ubicacion }} · <i class="bi bi-translate"></i> {{ p.idioma }}</p>
          </div>
        </div>
      </div>
      <div class="card-body p-4">
        <h2 class="h5 section-title">Perfil profesional</h2>
        <p class="mb-0">{{ p.perfil }}</p>
      </div>
    </section>`
})
export class Perfil { p = PERSONA; }
