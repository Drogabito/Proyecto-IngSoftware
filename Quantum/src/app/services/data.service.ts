import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api';

export class Link {
  constructor(public id: number, public url: string) { }
}
let URLS = [
  	new Link(1, 'https://www.facebook.com/'),
	new Link(2, 'https://www.youtube.com/')
];
let urlsPromise = Promise.resolve(URLS);

@Injectable()
export class DataService{

	constructor( private http: Http, private api : ApiService ){ }

	fetchData(texto:string){
		return this.http.get(this.api.url+texto).map(
			(res) => res.json()
		);
}

	getRawLink(){
		return this.api.url;
	}

	////

	getLinks(){
		return urlsPromise;
	}
	getSingleLink(id: number | string) {
	  return urlsPromise
		.then(links => links.find(link => link.id === +id));
	}
}
