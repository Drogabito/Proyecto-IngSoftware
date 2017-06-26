import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiService } from './api';
import { Link } from './link';

@Injectable()
export class DataService{

	private linkUrl = 'api/urls';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor( private http: Http, private api : ApiService ){ }

	create(url: string): Promise<Link> {
	  return this.http
	    .post(this.linkUrl, JSON.stringify({url: url}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data as Link)
	    .catch(this.handleError);
	}

	getLinks(): Promise<Link[]>{
		return this.http.get(this.linkUrl)
			.toPromise()
			.then(response => response.json().data as Link[])
			.catch(this.handleError)

	}

	getLink(id: number): Promise<Link> {
      const url = `${this.linkUrl}/${id}`;

	  return this.http.get(url)
	  .toPromise()
	  .then(response => response.json().data as Link)
	  .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	deleteAll(): Promise<void> {
	  const url = `commands/resetdb`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	/////

	fetchData(texto:string){
		var url = this.api.url+texto;
		var test = "./assets/test.json";
		if(texto == "test"){
			url = test
		}
		return this.http.get(url).map(
			(res) => res.json()
		);
	}

	getRawLink(){
		return this.api.url;
	}

}
