const { shell } = require('electron');

export class LinkService {

  	open(url:string){
    	shell.openExternal(url);
  	}

	collectImages(cherry){
		var imgLinks = cherry("img");
		var img2 = [];

		imgLinks.each(function() {
			var urlLink = cherry(this).attr('src');

			var comp = urlLink.substr(0,2);
			if (comp == "//"){
				urlLink = "http:".concat(urlLink);
			}

			img2.push(urlLink);
		});
		return img2;
	}
}
