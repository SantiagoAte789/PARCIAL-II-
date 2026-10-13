import { Component } from '@angular/core';
import { TEMAS, TECNOLOGIAS, ACTIVIDADES } from '../../data/aprendizaje.data';

@Component({
  selector: 'app-aprendizaje',
  templateUrl: './aprendizaje.html'
})
export class Aprendizaje {
  temas = TEMAS;
  tecnologias = TECNOLOGIAS;
  actividades = ACTIVIDADES;
}
