import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { NavComponent } from './nav/nav.component';
import { ClasesComponent } from './clases/clases.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NavloginComponent } from './navlogin/navlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClasesComponent,
    AlumnosComponent,
    NavloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
