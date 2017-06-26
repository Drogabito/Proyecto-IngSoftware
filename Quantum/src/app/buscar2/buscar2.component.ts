import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';

let cheerio = require('cheerio');
let request = require('request');

@Component({
	selector: 'app-buscar2',
	templateUrl: './buscar2.component.html'
})

export class Buscar2Component implements OnInit {

	zone:NgZone;

	constructor( private dataService: DataService ) {
		this.zone = new NgZone({enableLongStackTrace: false});
	}

	ngOnInit () {}

	imagesRecollected = []
	pagesToVisit = [];
	pagesVisited = {};
	numPagesVisited = 0;

	MAX_PAGES_TO_VISIT = 5;
	texto = 'utfsm'
	obj = []

	search(){
		this.imagesRecollected = [];
		this.pagesToVisit = [];
		this.pagesVisited = {};
		this.numPagesVisited = 0;

		this.dataService.fetchData(this.texto).map(
			(data) => this.obj = data
		).subscribe(() => {
			this.saveLinks();
		});
	}

	saveLinks(){
		for(let i of (this.obj as any).items){
			this.pagesToVisit.push(i.link);
		}
		console.log(this.pagesToVisit.length);
		this.scraping();
	}

	scraping(){
		if(this.numPagesVisited>=this.MAX_PAGES_TO_VISIT){
			console.log("Reached max limit of number of pages to visit.");
			return;
		}
		var nextPage = this.pagesToVisit.pop();
		if(nextPage in this.pagesVisited){
			//Ya se visitó, por ende se sigue buscando
			this.scraping();
		}
		else{
			//Se visita la página con cheerio (scraping)
			this.visitPage(nextPage);
		}
	}

	visitPage(url){
		this.pagesVisited[url] = true;
		this.numPagesVisited++;

		const self=this;
		console.log("Visiting page " + url);

		request(url,function(error,response,body:string){
			if(error){
				console.log("Error: " + error);
			}
			console.log("Status code: " + response.statusCode);
			if(response.statusCode === 200){
				var cherry = cheerio.load(body);

				//self.collectAbsoluteLinks(cherry);
				self.getImages(cherry)
				self.scraping();
			}
			else if(response.statusCode === 404){
				self.scraping();
			}
		});

	}

	collectAbsoluteLinks(cherry){
		var absoluteLinks = cherry("a[href^='http']");

		const self=this;
		absoluteLinks.each(function() {
			self.pagesToVisit.push(cherry(this).attr('href'));
		});
	}

	getImages(cherry){
		this.dataService.collectImages(cherry).map(
			(data) => {
				this.zone.run(() => {
					this.imagesRecollected = this.imagesRecollected.concat(data)
				})
			}
		);
	}

	openLink(url){
		this.dataService.open(url);
	}

}
