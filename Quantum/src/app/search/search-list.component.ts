import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService }  from '../services/data.service';
import { Link } from '../services/link';
@Component({
  	templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {
	urls: Link[];

	constructor(
		private dataService: DataService,
		private router: Router
	) {}

	ngOnInit(): void{
		this.urls=[];
      	this.getLinks();
    }

	texto = "";
	obj = [];

	search(texto: string){
		this.clear();
		this.dataService.fetchData(texto).map(
			(data) => this.obj = data
		).subscribe(() => {
			this.saveLinks();
		});
	}

	saveLinks(){
		for(let i of (this.obj as any).items){
			this.add(i.link, i.title, i.snippet);
		}
	}

	getLinks(): void{
		this.dataService.getLinks().then(links => this.urls = links);
	}

	gotoDetail(link){
		this.router.navigate(['/detail', link.id]);
	}

	add(name: string, title: string, snippet: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.dataService.create(name, title, snippet)
	    .then(link => {
	      this.urls.push(link);
	    });
	}

	clear(): void {
	  this.dataService.deleteAll();
	  this.urls=[];
	}

}
