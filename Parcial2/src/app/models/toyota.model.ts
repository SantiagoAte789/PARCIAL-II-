export type Categoria = 'Sedán' | 'SUV' | 'Pickup' | 'Híbrido' | 'Hatchback';
export interface ModeloToyota { nombre: string; categoria: Categoria; anioLanzamiento: number; descripcion: string; imagen: string; }
export interface HitoToyota { anio: number; evento: string; }
export interface DatoToyota { etiqueta: string; valor: string; }
