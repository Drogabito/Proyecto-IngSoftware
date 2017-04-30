const {shell} = require('electron');

export class ApiService {

	KEY = "AIzaSyA_OO6YWoZvTmx-LqlTZ-67i3NR9ytHYYo";
	ID = "011119156337370503063:q9kacazf-5q";

	link = "https://www.googleapis.com/customsearch/v1?key="+this.KEY+"&cx="+this.ID+"&q=";

	open(search:string){
    	shell.openExternal(this.link+search);
  	}

	JSONlink(texto){
		return this.link + texto;
	}

}
