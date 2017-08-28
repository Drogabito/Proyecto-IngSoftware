import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } 		from './not-found/not-found.component';
import { AboutComponent }		from './about/about.component';
import { SearchListComponent } 		from './search/search-list.component';
import { SearchDetailComponent } 		from './search/search-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'detail/:id', component: SearchDetailComponent },
  { path: 'search', component: SearchListComponent },
  { path: 'about', component: AboutComponent },
  //
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
