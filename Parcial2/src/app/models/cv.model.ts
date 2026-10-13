export interface Persona { nombre: string; edad: number; perfil: string; ubicacion: string; idioma: string; }
export interface Contacto { tipo: string; valor: string; icono: string; enlace?: string; }
export interface Formacion { titulo: string; institucion: string; estado: 'Graduado' | 'En curso'; detalle?: string; }
export interface Habilidad { nombre: string; nivel: number; categoria: 'Técnica' | 'IA' | 'Marketing' | 'Idioma'; }
export interface Experiencia { titulo: string; descripcion: string; tecnologias: string[]; }
