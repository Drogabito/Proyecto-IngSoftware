import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { VerComponent } from './ver/ver.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeaderComponent } from './header/header.component';

//Services
import { ApiService } from './api/api'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    VerComponent,
    BuscarComponent,
    HeaderComponent,
    NotFoundComponent
    ],
  providers:[ ApiService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
