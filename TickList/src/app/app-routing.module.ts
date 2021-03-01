import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'clases/:uid', component:ClasesComponent},
  {path:'clases/1', component:AlumnosComponent},
  {path:'login', component:LoginComponent},
  //{ path: 'camino/:parametro', component: ParametroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
