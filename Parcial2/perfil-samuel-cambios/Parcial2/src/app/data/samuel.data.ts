import { Colaborador } from '../models/colaborador.model';

export const SAMUEL: Colaborador = {
  nombre: 'Samuel Alzate Correa',
  iniciales: 'SC',
  rol: 'Estudiante de Ingeniería de Sistemas',
  edad: 20,
  ubicacion: 'UCEVA · Tuluá, Valle del Cauca, Colombia',
  perfil: 'Estudiante de Ingeniería de Sistemas en la UCEVA, con experiencia académica en desarrollo con Java (estructuras de datos y aplicaciones de escritorio) y en desarrollo web con HTML, CSS, TypeScript y Angular. Me interesa construir aplicaciones bien estructuradas, el modelado de bases de datos y el trabajo en equipo en proyectos de software.',
  contactos: [
    { tipo: 'WhatsApp', valor: '+57 315 872 0356', icono: 'bi-whatsapp', enlace: 'https://wa.me/573158720356' }
  ],
  formacion: [
    { titulo: 'Ingeniería de Sistemas', institucion: 'UCEVA – Tuluá, Valle del Cauca', estado: 'En curso' }
  ],
  habilidades: [
    { nombre: 'Java (POO y Swing)', categoria: 'Técnica' },
    { nombre: 'Estructuras de datos', categoria: 'Técnica' },
    { nombre: 'HTML5, CSS3 y PicoCSS', categoria: 'Técnica' },
    { nombre: 'JavaScript / TypeScript', categoria: 'Técnica' },
    { nombre: 'Angular, Bootstrap y SCSS', categoria: 'Técnica' },
    { nombre: 'Modelo entidad-relación y relacional', categoria: 'Técnica' },
    { nombre: 'Ciclos de vida del software', categoria: 'Metodología' },
    { nombre: 'Trabajo en equipo', categoria: 'Blanda' }
  ],
  experiencia: [
    { titulo: 'Plataforma de eventos y reservas (Proyecto Integrador Web 1)', descripcion: 'Frontend con arquitectura MVC y servicios con datos simulados para los perfiles de cliente, agente y administrador.', tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'] },
    { titulo: 'Calculadora Interactiva en Java', descripcion: 'Aplicación de escritorio con varias pestañas: matemáticas, álgebra, física y un quiz de Teoría General de Sistemas, con su documentación académica.', tecnologias: ['Java', 'Swing'] },
    { titulo: 'Proyectos de estructuras de datos', descripcion: 'Calculadora científica con el algoritmo Shunting Yard, árboles binarios de búsqueda sincronizados, cola de prioridad y gestión de parqueaderos.', tecnologias: ['Java', 'Árboles BST', 'Listas enlazadas'] },
    { titulo: 'Videojuego educativo sobre el cuidado del agua', descripcion: 'Proyecto en equipo sobre los ODS de la Agenda 2030 para niños, desarrollado con el modelo de ciclo de vida de prototipado.', tecnologias: ['ODS', 'Prototipado', 'Diseño de videojuego'] },
    { titulo: 'Páginas web con HTML5, CSS3 y PicoCSS', descripcion: 'Hoja de vida web responsive y una plataforma de álbumes musicales con estilos classless.', tecnologias: ['HTML5', 'CSS3', 'PicoCSS'] }
  ]
};
