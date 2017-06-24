import { NgModule }       		from '@angular/core';
import { CommonModule }   		from '@angular/common';
import { FormsModule }    		from '@angular/forms';
import { SearchListComponent }  from './search-list.component';
import { SearchRoutingModule } 	from './search-routing.module';
import { SearchDetailComponent } 	from './search-detail.component';
import { DataService } 			from '../services/data.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchListComponent,
	SearchDetailComponent
  ],
  providers: [
	  DataService
  ]
})
export class SearchModule {}
