import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {

	constructor( private route: ActivatedRoute, private router: Router ) {}

  	ngOnInit() { }

  	/*onSelect(id) {
    	this.router.navigate(['/hero', hero.id]);
  	}*/
}
