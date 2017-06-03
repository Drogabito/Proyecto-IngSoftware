import { Component, OnInit } from '@angular/core';

//jQuery
//declare var jQuery:any;
//declare var $:any;

let cheerio = require('cheerio');
let request = require('request');
let URL = require('url-parse');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	title = 'Probando jQuery';
	pageToVisit = "http://www.arstechnica.com";

  	ngOnInit() {}

	scraping(){
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
	}

	collectLinks(cherry) {
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
		 console.log("Found " + allAbsoluteLinks.length + " absolute links");
	 }

}
