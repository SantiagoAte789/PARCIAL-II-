import { Component } from '@angular/core';
import { CONTACTOS } from '../../data/cv.data';

@Component({
  selector: 'app-contacto',
  template: `
    <section class="card border-0 shadow-sm h-100"><div class="card-body">
      <h2 class="h5 section-title">Contacto</h2>
      <ul class="list-unstyled mb-0">
        @for (c of contactos; track c.tipo) {
          <li class="mb-3 d-flex gap-2 align-items-start">
            <i class="bi {{ c.icono }} text-danger fs-5"></i>
            <div><small class="text-muted d-block">{{ c.tipo }}</small>
              <a [href]="c.enlace" target="_blank" class="text-break text-decoration-none">{{ c.valor }}</a></div>
          </li>
        }
      </ul>
    </div></section>`
})
export class Contacto { contactos = CONTACTOS; }
