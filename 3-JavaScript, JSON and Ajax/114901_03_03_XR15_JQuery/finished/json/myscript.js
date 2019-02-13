$(document).ready(function() { // doc is loaded (4 precaution)
// alt: $(function() {

	$.getJSON('data.json', function(info){ // info is js/json obj

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

	}); //getJSON

}); // ready
