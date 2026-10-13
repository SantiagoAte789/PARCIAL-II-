import { Component } from '@angular/core';
import { SAMUEL } from '../../data/samuel.data';

@Component({
  selector: 'app-samuel',
  template: `
    <section class="card border-0 shadow-sm mb-4 overflow-hidden">
      <div class="bg-dark text-white p-4 p-md-5">
        <div class="d-flex align-items-center gap-3">
          @if (s.foto) {
            <img [src]="s.foto" [alt]="'Foto de ' + s.nombre" class="rounded-circle border border-3 border-danger object-fit-cover flex-shrink-0" width="110" height="110">
          } @else {
            <div class="rounded-circle border border-3 border-danger bg-secondary d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                 style="width:110px;height:110px;font-size:2.25rem" aria-hidden="true">{{ s.iniciales }}</div>
          }
          <div>
            <h2 class="h2 mb-1">{{ s.nombre }}</h2>
            <p class="mb-0 text-white-50">{{ s.rol }} · {{ s.edad }} años</p>
            <p class="mb-0 text-white-50"><i class="bi bi-geo-alt"></i> {{ s.ubicacion }}@if (s.idioma) { · <i class="bi bi-translate"></i> {{ s.idioma }} }</p>
          </div>
        </div>
      </div>
      <div class="card-body p-4">
        <h3 class="h5 section-title">Perfil profesional</h3>
        <p class="mb-0">{{ s.perfil }}</p>
      </div>
    </section>

    <div class="row g-4 mb-4">
      <div class="col-lg-5">
        <section class="card border-0 shadow-sm h-100"><div class="card-body">
          <h3 class="h5 section-title">Contacto</h3>
          <ul class="list-unstyled mb-0">
            @for (c of s.contactos; track c.tipo) {
              <li class="mb-3 d-flex gap-2 align-items-start">
                <i class="bi {{ c.icono }} text-danger fs-5"></i>
                <div><small class="text-muted d-block">{{ c.tipo }}</small>
                  <a [href]="c.enlace" target="_blank" rel="noopener" class="text-break text-decoration-none">{{ c.valor }}</a></div>
              </li>
            }
          </ul>
        </div></section>
      </div>
      <div class="col-lg-7">
        <section class="card border-0 shadow-sm h-100"><div class="card-body">
          <h3 class="h5 section-title">Formación académica</h3>
          @for (f of s.formacion; track f.titulo) {
            <div class="d-flex justify-content-between align-items-start border-bottom py-2">
              <div><strong>{{ f.titulo }}</strong>
                <div class="small text-muted">{{ f.institucion }}@if (f.detalle) { · {{ f.detalle }} }</div></div>
              <span class="badge" [class.text-bg-success]="f.estado === 'Graduado'" [class.text-bg-warning]="f.estado === 'En curso'">{{ f.estado }}</span>
            </div>
          }
        </div></section>
      </div>
    </div>

    <section class="card border-0 shadow-sm mb-4"><div class="card-body">
      <h3 class="h5 section-title">Conocimientos y habilidades</h3>
      <div class="d-flex flex-wrap gap-2">
        @for (h of s.habilidades; track h.nombre) {
          <span class="badge rounded-pill text-bg-light border fw-normal py-2 px-3" [title]="h.categoria">{{ h.nombre }}</span>
        }
      </div>
    </div></section>

    <section class="card border-0 shadow-sm"><div class="card-body">
      <h3 class="h5 section-title">Experiencia y proyectos</h3>
      <div class="row g-3">
        @for (e of s.experiencia; track e.titulo) {
          <div class="col-md-6"><div class="border rounded p-3 h-100">
            <h4 class="h6">{{ e.titulo }}</h4>
            <p class="small text-muted">{{ e.descripcion }}</p>
            @for (t of e.tecnologias; track t) { <span class="badge text-bg-dark me-1">{{ t }}</span> }
          </div></div>
        }
      </div>
    </div></section>`
})
export class Samuel { s = SAMUEL; }
