import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { ClasesComponent } from './clases/clases.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NavConLoginComponent } from './nav-con-login/nav-con-login.component';
import { NavSinLoginComponent } from './nav-sin-login/nav-sin-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    AlumnosComponent,
    NavConLoginComponent,
    NavSinLoginComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
