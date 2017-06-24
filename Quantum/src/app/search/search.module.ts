import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { SearchListComponent }    from './search-list.component';
import { SearchRoutingModule } from './search-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchListComponent
  ],
  providers: [ ]
})
export class SearchModule {}
