import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
