import { Component, OnInit } from '@angular/core';

//jQuery
declare var jQuery:any;
declare var $:any;

let cheerio = require('cheerio');
let request = require('request');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	title = 'Probando jQuery';
	resultado = "nada";

  	ngOnInit() {}

	result(){
		console.log(this.resultado);
	}

	scraping(){
		console.log("Scraping");
		request('https://news.ycombinator.com', function (error, response, html) {
			if (!error && response.statusCode == 200) {
			    var $ = cheerio.load(html);
			    var parsedResults = [];
			    $('span.comhead').each(function(i, element){
			      	// Select the previous element
			      	var a = $(this).prev();
			      	// Get the rank by parsing the element two levels above the "a" element
			      	var rank = a.parent().parent().text();
			      	// Parse the link title
			      	var title = a.text();
			      	// Parse the href attribute from the "a" element
			      	var url = a.attr('href');
			      	// Get the subtext children from the next row in the HTML table.
			      	var subtext = a.parent().parent().next().children('.subtext').children();
			      	// Extract the relevant data from the children
			      	var points = $(subtext).eq(0).text();
			      	var username = $(subtext).eq(1).text();
			      	var comments = $(subtext).eq(2).text();
			      	// Our parsed meta data object
			      	var metadata = {
			        	rank: parseInt(rank),
			        	title: title,
			        	url: url,
			        	points: parseInt(points),
			        	username: username,
			        	comments: parseInt(comments)
			      	};
			      	// Push meta-data into parsedResults array
			      	parsedResults.push(metadata);
			    });
			    // Log our finished parse results in the terminal
			    this.resultado = JSON.stringify(parsedResults);
				console.log("listo");
			}
		})
	}

	public mostrarTitulo(){
		console.log("click");

	   	//jQuery
	    $(".title").slideToggle();
  	}
}
