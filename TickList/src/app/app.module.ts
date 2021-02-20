import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ClaseComponent } from './clase/clase.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ClaseComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
