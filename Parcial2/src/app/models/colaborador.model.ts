import { Contacto, Experiencia, Formacion } from './cv.model';

export interface Conocimiento { nombre: string; categoria: string; }

export interface Colaborador {
  nombre: string;
  iniciales: string;
  rol: string;
  edad: number;
  ubicacion: string;
  idioma?: string;
  foto?: string;
  perfil: string;
  contactos: Contacto[];
  formacion: Formacion[];
  habilidades: Conocimiento[];
  experiencia: Experiencia[];
}
