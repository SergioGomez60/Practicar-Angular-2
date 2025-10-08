import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Secciones } from './pages/secciones/secciones';
import { Contacto } from './pages/contacto/contacto';
import { InfoUser } from './pages/info-user/info-user';

export const routes: Routes = [
    {path: "", component:Inicio},
    {path:"secciones", component:Secciones},
    {path:"contacto", component:Contacto},
    {path:"contacto/:userName", component:InfoUser}
];
