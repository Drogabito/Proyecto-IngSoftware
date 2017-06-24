import { NgModule }             	from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';
import { SearchListComponent }    	from './search-list.component';
import { SearchDetailComponent }  	from './search-detail.component';
const searchRoutes: Routes = [
  { path: 'search',  component: SearchListComponent },
  { path: 'link/:id', component: SearchDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(searchRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule { }
