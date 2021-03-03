import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { ClasesComponent } from './clases/clases.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'clases/:uid', component:ClasesComponent},
  {path:'clases/:uid/:clase', component:AlumnosComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'asistencia/:uid', component:AsistenciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
