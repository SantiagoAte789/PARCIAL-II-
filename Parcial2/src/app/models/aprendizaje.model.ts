export interface Tema { titulo: string; icono: string; descripcion: string; puntos: string[]; }
export interface Tecnologia { nombre: string; tipo: 'Lenguaje' | 'Framework' | 'Herramienta' | 'Estilos'; }
export interface Actividad { nombre: string; descripcion: string; entrega: string[]; url?: string; descarga?: string; }
