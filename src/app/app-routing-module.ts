import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
  //1. Ruta general
  {path:'', component: MovieListComponent},

  //2. Ruta lista
  {path:'movies', component: MovieListComponent},

  //3. Ruta detalle
  {path:'movies/:id', component: MovieListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
