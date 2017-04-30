import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})

export class BuscarComponent implements OnInit {

  	constructor( private api : ApiService ) { }

	texto:string = 'Hola';
	obj:string = '';

  	ngOnInit ( ) { }

	openLink(texto:string){
		this.obj = this.api.JSONlink(texto);
	}

	get diagnostic() {
    	return JSON.stringify(this.obj);
  	}

}
