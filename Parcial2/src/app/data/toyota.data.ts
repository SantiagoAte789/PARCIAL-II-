import { DatoToyota, HitoToyota, ModeloToyota } from '../models/toyota.model';

export const DATOS: DatoToyota[] = [
  { etiqueta: 'Origen', valor: 'Japón' },
  { etiqueta: 'Fundación', valor: '1937' },
  { etiqueta: 'Fundador', valor: 'Kiichiro Toyoda' },
  { etiqueta: 'Sede', valor: 'Toyota City, Aichi' }
];

export const HITOS: HitoToyota[] = [
  { anio: 1937, evento: 'Se funda Toyota Motor Corporation en Japón.' },
  { anio: 1966, evento: 'Llega el Corolla, uno de los autos más vendidos de la historia.' },
  { anio: 1968, evento: 'Nace la Hilux, pickup famosa por su resistencia.' },
  { anio: 1997, evento: 'El Prius se lanza como el primer híbrido de producción masiva.' },
  { anio: 2005, evento: 'Debuta la Fortuner, SUV muy popular en Latinoamérica.' }
];

export const MODELOS: ModeloToyota[] = [
  { nombre: 'Corolla', categoria: 'Sedán', anioLanzamiento: 1966, imagen: 'img/toyota/corolla.jpg', descripcion: 'Sedán compacto confiable y económico, el modelo más emblemático de la marca.' },
  { nombre: 'Camry', categoria: 'Sedán', anioLanzamiento: 1982, imagen: 'img/toyota/camry.jpg', descripcion: 'Sedán mediano cómodo y espacioso, ideal para familias.' },
  { nombre: 'Yaris', categoria: 'Hatchback', anioLanzamiento: 1999, imagen: 'img/toyota/yaris.jpg', descripcion: 'Compacto urbano, ágil y de bajo consumo.' },
  { nombre: 'Prius', categoria: 'Híbrido', anioLanzamiento: 1997, imagen: 'img/toyota/prius.jpg', descripcion: 'Pionero de la tecnología híbrida con gran eficiencia de combustible.' },
  { nombre: 'RAV4', categoria: 'SUV', anioLanzamiento: 1994, imagen: 'img/toyota/rav4.jpg', descripcion: 'SUV compacta versátil para ciudad y aventura.' },
  { nombre: 'Fortuner', categoria: 'SUV', anioLanzamiento: 2005, imagen: 'img/toyota/fortuner.jpg', descripcion: 'SUV robusta de siete puestos con capacidad todoterreno.' },
  { nombre: 'Land Cruiser Prado', categoria: 'SUV', anioLanzamiento: 1990, imagen: 'img/toyota/land-cruiser-prado.jpg', descripcion: 'Versión de la legendaria familia Land Cruiser, todoterreno símbolo de durabilidad en todo el mundo.' },
  { nombre: 'Hilux', categoria: 'Pickup', anioLanzamiento: 1968, imagen: 'img/toyota/hilux.jpg', descripcion: 'Pickup resistente, muy usada en trabajo pesado y campo.' }
];
