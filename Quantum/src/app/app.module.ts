import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { VerComponent } from './ver/ver.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeaderComponent } from './header/header.component';

//Services
import { ApiService } from './services/api';
import { DataService } from './services/data.service';
import { LinkService } from './services/link.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	HttpModule
  ],
  declarations: [
    AppComponent,
    VerComponent,
    BuscarComponent,
    HeaderComponent,
    NotFoundComponent
    ],
  providers:[ ApiService, DataService, LinkService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
