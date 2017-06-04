import { Component, OnInit } from '@angular/core';

let cheerio = require('cheerio');
let request = require('request');
let URL = require('url-parse');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	START_URL = 'http://www.arstechnica.com';
	MAX_PAGES_TO_VISIT = 9;
	SEARCH_WORD = "stemming";

	pagesVisited = {};
	pagesToVisit = [];
	numPagesVisited = 0;

	url = new URL(this.START_URL);
	baseUrl = this.url.protocol + "//" + this.url.hostname;

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
				var isWordFound = self.searchForWord(cherry, self.SEARCH_WORD);
				if(isWordFound){
					console.log('Word ' + self.SEARCH_WORD + ' found at page ' + url);
				}
				else{
					self.collectRelativeLinks(cherry);
					self.scraping();
				}
			}
		});
	}

	searchForWord(cherry, word) {
	  	var bodyText = cherry('html > body').text().toLowerCase();
	  	return (bodyText.indexOf(word.toLowerCase()) !== -1);
	}

	collectAbsoluteLinks(cherry){
		var absoluteLinks = cherry("a[href^='http']");

		const self=this;
		absoluteLinks.each(function() {
		 	self.pagesToVisit.push(cherry(this).attr('href'));
		});
	}

	collectRelativeLinks(cherry){
		var relativeLinks = cherry("a[href^='/']");

		const self=this;
		relativeLinks.each(function() {
		 	self.pagesToVisit.push(self.baseUrl + cherry(this).attr('href'));
		});
	}

}
