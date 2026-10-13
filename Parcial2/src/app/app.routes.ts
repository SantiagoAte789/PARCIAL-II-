import { Routes } from '@angular/router';
import { CvPage } from './pages/cv-page/cv-page';
import { Aprendizaje } from './pages/aprendizaje/aprendizaje';
import { Toyota } from './pages/toyota/toyota';

export const routes: Routes = [
  { path: '', redirectTo: 'hoja-de-vida', pathMatch: 'full' },
  { path: 'hoja-de-vida', component: CvPage, title: 'Hoja de vida' },
  { path: 'aprendizaje', component: Aprendizaje, title: 'Aprendizaje del curso' },
  { path: 'toyota', component: Toyota, title: 'Toyota' },
  { path: '**', redirectTo: 'hoja-de-vida' }
];
