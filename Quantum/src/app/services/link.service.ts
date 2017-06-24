import { Injectable } from '@angular/core';
let { shell } = require('electron');
let urel = require('url')

@Injectable()
export class LinkService{

  	open(url:string){
    	shell.openExternal(url);
  	}

	collectImages(cherry, url){
		var imgLinks = cherry("img");
		var img2 = [];
		const self = this;
        // myurl = new URL(url);
        //var baseUrl = myurl.protocol + "//" + myurl.hostname;

		imgLinks.each(function() {
			var urlLink = cherry(this).attr('src');
			if(urlLink == undefined){
				return;
			}
			/*var comp = urlLink.substr(0,2);
			if (comp == "//"){
				urlLink = "http:".concat(urlLink);
			}*/
            console.log(urel.resolve(url, urlLink));
			img2.push(urel.resolve(url, urlLink));
		});
		return img2.map(
			(res) => res
		);;
	}
}
