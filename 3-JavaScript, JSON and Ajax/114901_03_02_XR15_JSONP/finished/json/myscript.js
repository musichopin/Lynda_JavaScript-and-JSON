// jsonp is used to read data from servers other than the one we are currently in and making request from. 
// we read our json data as a script (like cdn) rather than directly make ajax call as before
function dataHandler(info) {
	var output='';
	for (var i = 0; i <= info.links.length-1; i++) {
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

}