// we need to have hosted or local web server for this project
var request;
// checks browser request types
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else { // for microsoft ie
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data/data.json'); 
// opens/configures the async request for data file
// data.json cud be php file or anything

// since we have async request above we need to put response below inside 
// this event handler which is triggered whenever readyState changes
request.onreadystatechange = function() { // async event handler cud come after send()
	if ((request.status === 200) && // if request successful
		(request.readyState === 4)) { // if response complete

		info = JSON.parse(request.responseText); // response handling part
//JSON.parse converts string (containing json response) to js/json object
//JSON.stringify(info) ile request.responseText aynı stringdir (içinde json olan string)

		var output='';

		for (var i = 0; i < info.links.length; i++) {
			for (key in info.links[i]) {
				if (info.links[i].hasOwnProperty(key)) {
					output += '<li>' + 
					'<a href = "' + info.links[i][key] +
					'">' + key + '</a>';
					'</li>';
			  }   
			}
		}
		
		var update = document.getElementById('links');
		update.innerHTML = output;
			
	} //ready
} //event

request.send(); 
// js 1st sends a request to server then if it is successfull it triggers handler above