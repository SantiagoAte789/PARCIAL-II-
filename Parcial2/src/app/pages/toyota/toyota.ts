import { Component, computed, signal } from '@angular/core';
import { Categoria } from '../../models/toyota.model';
import { DATOS, HITOS, MODELOS } from '../../data/toyota.data';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.html',
  styleUrl: './toyota.scss'
})
export class Toyota {
  datos = DATOS;
  hitos = HITOS;
  modelos = MODELOS;
  categorias: ('Todos' | Categoria)[] = ['Todos', 'Sedán', 'SUV', 'Pickup', 'Híbrido', 'Hatchback'];
  filtro = signal<'Todos' | Categoria>('Todos');
  visibles = computed(() => {
    const f = this.filtro();
    return f === 'Todos' ? this.modelos : this.modelos.filter(m => m.categoria === f);
  });
}
