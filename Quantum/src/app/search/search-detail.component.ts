import 'rxjs/add/operator/switchMap';
import { Component, OnInit }					from '@angular/core';
import { ActivatedRoute, Params } 				from '@angular/router';
import { Location }               				from '@angular/common';

import { DataService }  						from '../services/data.service';
import { Link }  								from '../services/link';

@Component({
  templateUrl: './search-detail.component.html'
})
export class SearchDetailComponent implements OnInit{
  	link: Link;

	constructor(
		private dataService: DataService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
	  this.route.params
		.switchMap((params: Params) => this.dataService.getLink(+params['id']))
		.subscribe(hero => this.link = hero);
	}

	save(): void {
	  this.dataService.update(this.link)
	    .then(() => this.goBack());
	}

	goBack(): void {
	  this.location.back();
	}
}
