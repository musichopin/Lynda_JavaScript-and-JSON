// we need to have hosted or local web server for this project
var request;
// checks browser request types
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else { // for microsoft ie
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data/data.json'); // opens the async request for data file

request.onreadystatechange = function() { // async event handler
	if ((request.status === 200) && // if request successful
		(request.readyState === 4)) {

		info = JSON.parse(request.responseText);//converts json response to js obj
// JSON.stringify(info) ile request.responseText aynı jsondır (string içinde json obj)

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