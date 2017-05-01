import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})

export class BuscarComponent implements OnInit {

  	constructor( private dataService : DataService ) { }

	texto:string = '';
	obj = [];
	raw:string = '';

  	ngOnInit () {}

	search(){
		this.dataService.fetchData(this.texto).subscribe(
			(data) => this.obj = data
		);
		this.raw = this.dataService.getRawLink() + this.texto;
	}

	get diagnostic() {
    	return JSON.stringify(this.raw);
  	}

}
