import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})

export class BuscarComponent implements OnInit {

  	constructor( private api : ApiService, private dataService : DataService ) { }

	texto:string = 'Hola';
	obj = [];

  	ngOnInit ( ) {
		this.dataService.fetchData().subscribe(
			(data) => this.obj = data
		);
	}

	openLink(texto:string){
		this.texto = this.api.JSONlink(texto);
	}

}
