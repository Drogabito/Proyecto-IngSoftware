import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Link, DataService }  from '../services/data.service';
@Component({
  templateUrl: './search-detail.component.html'
})
export class SearchDetailComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  link: Link;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) {}
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getSingleLink(+params['id']))
      .subscribe((link: Link) => this.link = link);
  }
  gotoSearch() {
    let linkId = this.link ? this.link.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/search', { id: linkId, foo: 'foo' }]);
  }
}
