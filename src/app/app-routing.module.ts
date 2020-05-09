import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';


const routes: Routes = [
  {path: '',redirectTo: 'cursos', pathMatch: 'full'},
  {path: 'cursos', component:CursosComponent},
  {path: 'curso/:id', component:CursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
