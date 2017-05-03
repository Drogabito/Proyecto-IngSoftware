import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

let request = require('request');
let cheerio = require('cheerio');

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit{

	urls = [];
	title = 'Probando jQuery';

  	ngOnInit() {}

	scraping(){
		request('https://news.ycombinator.com', function (error, response, html) {
		  	if (!error && response.statusCode == 200) {
		    	console.log(html);
		  	}
		});

		console.log('scraping!');
	}

	public mostrarTitulo(){
		console.log("click");

	   	//jQuery
	    $(".title").slideToggle();
  	}
}
