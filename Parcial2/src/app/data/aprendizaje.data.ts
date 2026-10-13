import { Actividad, Tecnologia, Tema } from '../models/aprendizaje.model';

export const TEMAS: Tema[] = [
  { titulo: 'Fundamentos de JavaScript', icono: 'bi-filetype-js', descripcion: 'Qué es JavaScript y dónde se usa.',
    puntos: ['Sitios y aplicaciones web', 'Servidores y APIs', 'Aplicaciones móviles y de escritorio', 'Videojuegos, IA y automatización/scripting', 'Gran ecosistema de librerías y frameworks'] },
  { titulo: 'HTML, CSS y SCSS', icono: 'bi-code-slash', descripcion: 'Estructura y estilos de la interfaz.',
    puntos: ['HTML semántico', 'CSS y diseño responsive', 'SCSS: variables y anidación', 'Bootstrap 5'] },
  { titulo: 'Frontend y Backend', icono: 'bi-diagram-3', descripcion: 'Dos mitades de una aplicación web.',
    puntos: ['Frontend: React, Angular, Vue', 'Backend: Node.js y Express', 'Mobile: React Native e Ionic', 'Desktop: Electron'] },
  { titulo: 'El DOM', icono: 'bi-window-stack', descripcion: 'Document Object Model y su manipulación con JS.',
    puntos: ['Seleccionar elementos', 'Eventos', 'classList.add / remove', 'Actualizar contenido dinámicamente'] },
  { titulo: 'Programación síncrona y asíncrona', icono: 'bi-hourglass-split', descripcion: 'Cómo JavaScript maneja tareas que toman tiempo.',
    puntos: ['Ejecución síncrona', 'Callbacks, Promises y async/await', 'Event loop'] },
  { titulo: 'Herramientas', icono: 'bi-tools', descripcion: 'Ecosistema moderno de desarrollo.',
    puntos: ['npm', 'Vite', 'Webpack'] },
  { titulo: 'TypeScript', icono: 'bi-braces', descripcion: 'JavaScript con tipado estático.',
    puntos: ['Tipos básicos: string, number, boolean, arrays, enum', 'any, unknown, void, never', 'Interfaces y Type Alias', 'Union Types, Type Guards y Generics', 'Clases, modificadores de acceso y herencia'] },
  { titulo: 'TypeScript en la industria', icono: 'bi-building', descripcion: 'Empresas y tecnologías que lo usan.',
    puntos: ['Microsoft, Google, Airbnb, Slack', 'React, Angular, Next.js', 'NestJS, Express, Vite, Node.js'] },
  { titulo: 'Angular y SPA', icono: 'bi-lightning-charge', descripcion: 'Guía de clase: aplicaciones de una sola página.',
    puntos: ['Qué es una SPA y diferencias con una MPA', 'Componentes standalone', 'Routing, servicios e inyección de dependencias', 'Control de flujo: @if, @for, @switch'] }
];

export const TECNOLOGIAS: Tecnologia[] = [
  { nombre: 'JavaScript', tipo: 'Lenguaje' }, { nombre: 'TypeScript', tipo: 'Lenguaje' },
  { nombre: 'Angular 20', tipo: 'Framework' }, { nombre: 'Node.js', tipo: 'Framework' },
  { nombre: 'HTML5', tipo: 'Lenguaje' }, { nombre: 'CSS3', tipo: 'Estilos' },
  { nombre: 'SCSS', tipo: 'Estilos' }, { nombre: 'Bootstrap 5', tipo: 'Estilos' },
  { nombre: 'npm', tipo: 'Herramienta' }, { nombre: 'Git y GitHub', tipo: 'Herramienta' }
];

export const ACTIVIDADES: Actividad[] = [
  { nombre: 'Taller 3 – JavaScript y TypeScript',
    descripcion: 'Ejercicios con variables, funciones, arreglos, objetos, desestructuración, spread, tipos, interfaces, union types, enums, clases, herencia, generics y utility types.',
    entrega: ['Repositorio en GitHub', 'Commits estandarizados', 'PDF con la URL', 'Trabajo en grupo'],
    url: 'https://github.com/Novvulent/Taller3pw' },
  { nombre: 'Actividad en clase – Manejo del DOM con JS',
    descripcion: 'App MultiApp con patrón MVC: Saludar, Mostrar mensaje, Contador y Mostrar/Ocultar con classList.',
    entrega: ['Patrón MVC y scaffolding', 'Lógica separada en Model, View y Controller', 'Sin errores en consola'],
    descarga: 'descargas/MultiApp21-09.zip' },
  { nombre: 'Avance Proyecto Integrador',
    descripcion: 'Estructura inicial del frontend en Angular con rutas, componentes, SCSS, Bootstrap y datos mockeados para Auth, Cliente, Agente y Administrador.',
    entrega: ['Componentes y rutas', 'Diseño responsive', 'Mocks y servicios', 'README.md'] },
  { nombre: 'Parcial II – Aplicación Angular',
    descripcion: 'Esta aplicación: hoja de vida, aprendizaje del curso y página de tema libre con renderizado dinámico.',
    entrega: ['Interfaces TypeScript', '@for y @if', 'Barra de navegación', 'Repositorio GitHub'] }
];
