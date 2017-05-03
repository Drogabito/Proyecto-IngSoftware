import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';

@Component({
  	selector: 'app-buscar',
  	templateUrl: './buscar.component.html'
})

export class BuscarComponent implements OnInit {

  	constructor( private dataService : DataService, private linkService : LinkService ) { }

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

	openLink(url:string){
		this.linkService.open(url);
	}

	get diagnostic() {
    	return JSON.stringify(this.raw);
  	}

}
