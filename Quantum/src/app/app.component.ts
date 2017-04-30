import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  	selector: 'app',
  	templateUrl: './app.component.html',
  	styleUrls: [ '../assets/styles.css',
		'../../node_modules/bootstrap/dist/css/bootstrap.css',
  		'../../node_modules/font-awesome/css/font-awesome.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
