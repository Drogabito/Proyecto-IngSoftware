import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService }  from '../services/data.service';
import { Link } from '../services/link';
@Component({
  	templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {
	urls: Link[];
	selectedLink: Link;

	constructor(
		private service: DataService,
		private router: Router
	) {}

	ngOnInit(): void{
      this.getLinks();
    }

	getLinks(): void{
		this.service.getLinks().then(links => this.urls = links);
	}

	onSelect(link: Link): void {
		this.selectedLink = link
	}

	gotoDetail(){
		this.router.navigate(['/detail'], this.selectedLink.id);
	}
}
