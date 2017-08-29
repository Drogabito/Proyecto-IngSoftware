import 'rxjs/add/operator/switchMap';
import { Component, OnInit, NgZone }	from '@angular/core';
import { ActivatedRoute, Params } 		from '@angular/router';
import { Location }               		from '@angular/common';

import { DataService }  				from '../services/data.service';
import { Link }  						from '../services/link';

let cheerio = require('cheerio');
let request = require('request');

@Component({
  templateUrl: './search-detail.component.html'
})
export class SearchDetailComponent implements OnInit{
	zone:NgZone;
  	link: Link;
	imagesRecollected = [];
	textCollected = [];

	constructor(
		private dataService: DataService,
		private route: ActivatedRoute,
		private location: Location
	){
		this.zone = new NgZone({enableLongStackTrace: false});
	}

	ngOnInit(): void {
	  	this.route.params
			.switchMap((params: Params) => this.dataService.getLink(+params['id']))
			.subscribe(link => {
					this.link = link;
					this.visitPage();
				}
			);
	}

	DeleteText(text){
		let index: number = this.textCollected.indexOf(text);
		if(index != -1){
			this.textCollected.splice(index,1);
		}
		this.zone = new NgZone({enableLongStackTrace: false});
	}

	DeleteImage(img){
		let index: number = this.imagesRecollected.indexOf(img);
		if(index != -1){
			this.imagesRecollected.splice(index,1);
		}
		this.zone = new NgZone({enableLongStackTrace: false});
	}

	visitPage(){
		const self=this;
		console.log("Visiting page " + this.link.url);

		request(this.link.url,function(error,response,body:string){
			if(error){
				console.log("Error: " + error);
			}
			console.log("Status code: " + response.statusCode);
			if(response.statusCode === 200){
				var cherry = cheerio.load(body);
				self.getTextos(cherry);
				self.getImages(cherry, self.link.url);
			}
		});
	}

	getImages(cherry, url){
		this.dataService.collectImages(cherry, url).map(
			(data) => {
				this.zone.run(() => {
					this.imagesRecollected = this.imagesRecollected.concat(data)
				})
			}
		);
	}

	getTextos(cherry){
		this.dataService.collectTextos(cherry).map(
			(data) => this.textCollected = this.textCollected.concat(data)
		);
	}

	goBack(): void {
	  this.location.back();
	}
}
