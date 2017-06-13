import { Injectable } from '@angular/core';
let { shell } = require('electron');

@Injectable()
export class LinkService{

  	open(url:string){
    	shell.openExternal(url);
  	}

	collectImages(cherry){
		var imgLinks = cherry("img");
		var img2 = [];
		const self = this;

		imgLinks.each(function() {
			var urlLink = cherry(this).attr('src');
			if(urlLink == undefined){
				return;
			}
			var comp = urlLink.substr(0,2);
			if (comp == "//"){
				urlLink = "http:".concat(urlLink);
			}

			img2.push(urlLink);
		});
		return img2.map(
			(res) => res
		);;
	}
}
