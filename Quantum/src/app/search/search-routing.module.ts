import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchListComponent }    from './search-list.component';
const searchRoutes: Routes = [
  { path: 'search',  component: SearchListComponent }
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
