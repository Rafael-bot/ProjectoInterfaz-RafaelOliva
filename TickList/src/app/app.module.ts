import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { NavComponent } from './nav/nav.component';
import { ClasesComponent } from './clases/clases.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClasesComponent,
    AlumnosComponent
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
