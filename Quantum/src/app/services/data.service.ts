import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api';
import { URLS } from './mock-data';
import { Link } from './link';

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

	getLinks(): Promise<Link[]>{
		return Promise.resolve(URLS);
	}

	getLink(id: number): Promise<Link> {
      return this.getLinks()
                 .then(heroes => heroes.find(hero => hero.id === id));
    }

}
