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
import { SearchListComponent } 	from './search/search-list.component';
import { SearchDetailComponent } 	from './search/search-detail.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

//Services
import { ApiService } 			from './services/api';
import { DataService } 			from './services/data.service';
import { LinkService } 			from './services/link.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService, {
		passThruUnknownUrl: true
	}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    VerComponent,
    BuscarComponent,
	Buscar2Component,
    HeaderComponent,
	SearchDetailComponent,
	SearchListComponent,
    NotFoundComponent
    ],
  providers:[ ApiService, DataService, LinkService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
