import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api';

@Injectable()
export class DataService{

	constructor(private http: Http, private api : ApiService){}

	url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA_OO6YWoZvTmx-LqlTZ-67i3NR9ytHYYo&cx=011119156337370503063:q9kacazf-5q&q=samsung+galaxy'

	fetchData(texto:string){
		return this.http.get(this.api.url+texto).map(
			(res) => res.json()
		);
	}

	getRawLink(){
		return this.api.url;
	}

}
