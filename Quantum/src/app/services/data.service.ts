import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService{

	constructor(private http: Http){}

	url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA_OO6YWoZvTmx-LqlTZ-67i3NR9ytHYYo&cx=011119156337370503063:q9kacazf-5q&q=samsung+galaxy'

	fetchData(){
		return this.http.get(this.url).map(
			(res) => res.json()
		);
	}

}
