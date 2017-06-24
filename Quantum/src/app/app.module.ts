import { NgModule } 			from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule } 			from '@angular/forms';
import { HttpModule } 			from '@angular/http';

//components
import { AppComponent } 		from './app.component';
import { AppRoutingModule } 	from './app.routing.module';

import { HeaderComponent } 		from './header/header.component';
import { NotFoundComponent }	from './not-found/not-found.component';
import { VerComponent } 		from './ver/ver.component';
import { BuscarComponent } 		from './buscar/buscar.component';
import { Buscar2Component } 	from './buscar2/buscar2.component';
import { HeroesModule }     	from './heroes/heroes.module';
import { SearchModule }     	from './search/search.module';

//Services
import { ApiService } 			from './services/api';
import { DataService } 			from './services/data.service';
import { LinkService } 			from './services/link.service'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HeroesModule,
	SearchModule,
    AppRoutingModule,
	HttpModule
  ],
  declarations: [
    AppComponent,
    VerComponent,
    BuscarComponent,
	Buscar2Component,
    HeaderComponent,
    NotFoundComponent
    ],
  providers:[ ApiService, DataService, LinkService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
