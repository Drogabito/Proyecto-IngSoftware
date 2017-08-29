import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  	selector: 'app',
  	templateUrl: './app.component.html',
  	styleUrls: [ '../assets/css/styles.css',
		'../assets/css/load.css',
		'../../node_modules/bootstrap/dist/css/bootstrap.css',
  		'../../node_modules/font-awesome/css/font-awesome.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
