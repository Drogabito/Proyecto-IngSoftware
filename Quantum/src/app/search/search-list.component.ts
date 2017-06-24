import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Link, DataService }  from '../services/data.service';
@Component({
  	templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {
	urls: Observable<Link[]>;
    private selectedId: number;
	constructor(
		private service: DataService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
      this.urls = this.route.params
        .switchMap((params: Params) => {
          this.selectedId = +params['id'];
          return this.service.getLinks();
        });
    }
	isSelected(link: Link) { return link.id === this.selectedId; }
	onSelect(link: Link) {
	  this.router.navigate(['/link', link.id]);
	}
}
