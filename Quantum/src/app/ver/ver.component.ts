import { Component, OnInit } from '@angular/core';

//jQuery
declare var jQuery:any;
declare var $:any;

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
		request(this.pageToVisit, function(error, response, body) {
		   if(error) {
		     console.log("Error: " + error);
		   }
		   // Check status code (200 is HTTP OK)
		   console.log("Status code: " + response.statusCode);
		   if(response.statusCode === 200) {
		     // Parse the document body
		     $ = cheerio.load(body);
		     console.log("Page title:  " + $('title').text());
			 collectLinks($);
		   }

		   function collectLinks($) {
		     var allRelativeLinks = [];
		     var allAbsoluteLinks = [];

		     var relativeLinks = $("a[href^='/']");
		     relativeLinks.each(function() {
		   	  allRelativeLinks.push($(this).attr('href'));

		     });

		     var absoluteLinks = $("a[href^='http']");
		     absoluteLinks.each(function() {
		   	  allAbsoluteLinks.push($(this).attr('href'));
		     });

		     console.log("Found " + allRelativeLinks.length + " relative links");
		     console.log("Found " + allAbsoluteLinks.length + " absolute links");
		     return;
		 	}
		});
	}

	searchForWord($, word) {
	  var bodyText = $('html > body').text();
	  if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
	    return true;
	  }
	  return false;
	}

	public mostrarTitulo(){
		console.log("click");
	   	//jQuery
	    $(".title").slideToggle();
  	}
}
