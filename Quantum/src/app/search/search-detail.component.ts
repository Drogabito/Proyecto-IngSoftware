import 'rxjs/add/operator/switchMap';
import { Component, OnInit, NgZone }			from '@angular/core';
import { ActivatedRoute, Params } 		from '@angular/router';
import { Location }               		from '@angular/common';

import { DataService }  				from '../services/data.service';
import { Link }  						from '../services/link';
import { LinkService } 					from '../services/link.service';

let cheerio = require('cheerio');
let request = require('request');

@Component({
  templateUrl: './search-detail.component.html'
})
export class SearchDetailComponent implements OnInit{
	zone:NgZone;
  	link: Link;
	imagesRecollected = []

	constructor(
		private dataService: DataService,
		private route: ActivatedRoute,
		private location: Location,
		private linkService: LinkService
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

				//self.collectAbsoluteLinks(cherry);
				self.getImages(cherry)
			}
		});
	}

	getImages(cherry){
		this.linkService.collectImages(cherry).map(
			(data) => {
				this.zone.run(() => {
					this.imagesRecollected = this.imagesRecollected.concat(data)
				})
			}
		);
	}

	goBack(): void {
	  this.location.back();
	}
}
