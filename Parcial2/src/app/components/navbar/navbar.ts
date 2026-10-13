import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface EnlaceNav { ruta: string; texto: string; icono: string; }

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html'
})
export class Navbar {
  abierto = signal(false);
  enlaces: EnlaceNav[] = [
    { ruta: '/hoja-de-vida', texto: 'Hoja de vida', icono: 'bi-person-badge' },
    { ruta: '/aprendizaje', texto: 'Aprendizaje del curso', icono: 'bi-mortarboard' },
    { ruta: '/toyota', texto: 'Toyota', icono: 'bi-car-front' }
  ];
  alternar() { this.abierto.update(v => !v); }
  cerrar() { this.abierto.set(false); }
}
