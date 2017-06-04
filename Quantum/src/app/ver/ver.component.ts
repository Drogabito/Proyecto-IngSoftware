import { Component, OnInit } from '@angular/core';

//jQuery
//declare var jQuery:any;
//declare var $:any;

let cheerio = require('cheerio');
let request = require('request');
//let URL = require('url-parse');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	//title = 'Probando jQuery';
	//pageToVisit = "http://www.arstechnica.com";

	START_URL = "http://www.arstechnica.com";
	MAX_PAGES_TO_VISIT = 3;

	pagesVisited = {};
	pagesToVisit = [];
	numPagesVisited = 0;

  	ngOnInit() {
		this.pagesToVisit.push(this.START_URL);
	}

	crawl(){
		if(this.numPagesVisited>=this.MAX_PAGES_TO_VISIT){
			console.log("Reached max limit of number of pages to visit.");
		    return;
		}
		var nextPage = this.pagesToVisit.pop();
		if(nextPage in this.pagesVisited){
			//Ya se visitó, por ende se sigue buscando
			this.crawl();
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
				self.crawl();
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

	/*scraping(){
		console.log("Visiting page " + this.pageToVisit);
		const self=this;
		request(this.pageToVisit, function(error, response, body:string) {
		   	if(error) {
		     	console.log("Error: " + error);
		   	}
		   	// Check status code (200 is HTTP OK)
		   	console.log("Status code: " + response.statusCode);
		   	if(response.statusCode === 200) {
		    	// Parse the document body
		     	var cherry = cheerio.load(body);
		     	console.log("Page title:  " + $('title').text());
			 	self.collectLinks(cherry);
		   	}
 		});
	}*/

	/*collectLinks(cherry) {
		var allRelativeLinks = [];
		var allAbsoluteLinks = [];

		var relativeLinks = cherry("a[href^='/']");
		relativeLinks.each(function() {
		 	allRelativeLinks.push(cherry(this).attr('href'));
		});

		var absoluteLinks = cherry("a[href^='http']");
		absoluteLinks.each(function() {
		 	allAbsoluteLinks.push(cherry(this).attr('href'));
		});

		console.log("Found " + allRelativeLinks.length + " relative links");
		console.log(allRelativeLinks);
		console.log("Found " + allAbsoluteLinks.length + " absolute links");
		console.log(allAbsoluteLinks);
	}*/

}
