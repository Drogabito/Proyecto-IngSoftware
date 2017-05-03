import { Component, OnInit } from '@angular/core';

//jQuery
declare var jQuery:any;
declare var $:any;

const {cheerio} = require('cheerio');
//request está causando problemas!!!!
let request = require('request');

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
