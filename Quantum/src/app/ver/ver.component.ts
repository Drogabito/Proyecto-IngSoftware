import { Component, OnInit } from '@angular/core';

let cheerio = require('cheerio');
let request = require('request');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	START_URL = "http://www.arstechnica.com";
	MAX_PAGES_TO_VISIT = 3;

	pagesVisited = {};
	pagesToVisit = [];
	numPagesVisited = 0;

  	ngOnInit() {
		this.pagesToVisit.push(this.START_URL);
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

		console.log("Visiting page " + url);
		const self=this;

		request(url,function(error,response,body:string){
			if(error){
				console.log("Error: " + error);
			}
			console.log("Status code: " + response.statusCode);
			if(response.statusCode === 200){
				var cherry = cheerio.load(body);
				self.collectAbsoluteLinks(cherry);
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
		console.log(self.pagesToVisit.length + " pagesToVisit");
	}

}
