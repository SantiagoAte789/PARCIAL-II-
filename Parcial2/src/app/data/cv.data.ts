import { Contacto, Experiencia, Formacion, Habilidad, Persona } from '../models/cv.model';

export const PERSONA: Persona = {
  nombre: 'Santiago Atehortúa Jaramillo',
  edad: 18,
  ubicacion: 'Tuluá, Valle del Cauca, Colombia',
  idioma: 'Inglés B1',
  perfil: 'Estudiante de Ingeniería de Sistemas y de Análisis y Desarrollo de Software, enfocado en el desarrollo Full Stack (bases de datos, servidores y APIs). Tengo experiencia creando páginas profesionales e integrando agentes, skills y prompts de IA, además de conocimientos en contenido y marketing digital.'
};

export const CONTACTOS: Contacto[] = [
  { tipo: 'Correo', valor: 'jaramillo.atehortua01@uceva.edu.co', icono: 'bi-envelope-fill', enlace: 'mailto:jaramillo.atehortua01@uceva.edu.co' },
  { tipo: 'WhatsApp', valor: '+57 313 768 8423', icono: 'bi-whatsapp', enlace: 'https://wa.me/573137688423' },
  { tipo: 'LinkedIn', valor: 'Santiago Jaramillo Atehortúa', icono: 'bi-linkedin', enlace: 'https://www.linkedin.com/in/jaramillo-atehortua-santiago-b89065433/' }
];

export const FORMACION: Formacion[] = [
  { titulo: 'Ingeniería de Sistemas', institucion: 'UCEVA – Tuluá, Valle del Cauca', estado: 'En curso', detalle: 'Cuarto semestre' },
  { titulo: 'Tecnólogo en Análisis y Desarrollo de Software', institucion: 'SENA', estado: 'En curso' },
  { titulo: 'Técnico en Integración de Contenidos Digitales', institucion: 'SENA', estado: 'Graduado' },
  { titulo: 'Bachiller', institucion: 'Mariantonia Ruiz', estado: 'Graduado' },
  { titulo: 'Claude Code in Action', institucion: 'Anthropic', estado: 'Graduado', detalle: 'Certificación' },
  { titulo: 'AI Fluency: Framework & Foundations', institucion: 'Anthropic', estado: 'Graduado', detalle: 'Certificación' }
];

export const HABILIDADES: Habilidad[] = [
  { nombre: 'Desarrollo Full Stack', nivel: 70, categoria: 'Técnica' },
  { nombre: 'JavaScript / TypeScript', nivel: 70, categoria: 'Técnica' },
  { nombre: 'HTML, CSS y SCSS', nivel: 80, categoria: 'Técnica' },
  { nombre: 'Angular', nivel: 55, categoria: 'Técnica' },
  { nombre: 'Bases de datos, servidores y APIs', nivel: 65, categoria: 'Técnica' },
  { nombre: 'Agentes, skills y prompts', nivel: 80, categoria: 'IA' },
  { nombre: 'Agente local', nivel: 65, categoria: 'IA' },
  { nombre: 'Contenido y marketing', nivel: 70, categoria: 'Marketing' },
  { nombre: 'Inglés (B1)', nivel: 50, categoria: 'Idioma' }
];

export const EXPERIENCIA: Experiencia[] = [
  { titulo: 'Creación de páginas web profesionales', descripcion: 'Diseño y desarrollo de sitios web con interfaces limpias y responsive.', tecnologias: ['HTML', 'CSS', 'JavaScript'] },
  { titulo: 'App de gestión de comida para animales', descripcion: 'Aplicación finalizada para controlar y administrar el alimento de animales.', tecnologias: ['Full Stack', 'Base de datos', 'API'] },
  { titulo: 'Eventra – eventos especiales', descripcion: 'Plataforma en desarrollo para publicar y reservar eventos especiales.', tecnologias: ['Angular', 'TypeScript', 'SCSS'] },
  { titulo: 'Integración de agentes, skills y prompts', descripcion: 'Trabajo con agentes de IA, incluido un agente local, aplicados a flujos de desarrollo.', tecnologias: ['IA', 'Claude', 'Automatización'] }
];
