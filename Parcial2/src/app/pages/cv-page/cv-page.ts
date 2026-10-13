import { Component } from '@angular/core';
import { Perfil } from '../../components/cv/perfil';
import { Contacto } from '../../components/cv/contacto';
import { Formacion } from '../../components/cv/formacion';
import { Habilidades } from '../../components/cv/habilidades';
import { Experiencia } from '../../components/cv/experiencia';
import { Samuel } from '../../components/cv/samuel';

@Component({
  selector: 'app-cv-page',
  imports: [Perfil, Contacto, Formacion, Habilidades, Experiencia, Samuel],
  template: `
    <app-perfil />
    <div class="row g-4 mb-4">
      <div class="col-lg-5"><app-contacto /></div>
      <div class="col-lg-7"><app-formacion /></div>
    </div>
    <app-habilidades />
    <app-experiencia />

    <hr class="my-5">
    <app-samuel />`
})
export class CvPage {}
