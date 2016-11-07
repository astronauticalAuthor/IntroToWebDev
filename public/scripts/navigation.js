var isLoggedIn = false;
var publicLinks = [["/", "Home"], ["/about", "About"], ["/rush", "Rush"], ["/executives","Executives"],["/blog","Blog"]];
var privateLinks = [["/schedule", "Schedule"]];

function mainNavigation() {
	isLoggedIn = checkLoggedIn();
	initLinks(isLoggedIn);
}

function checkLoggedIn() {
	return true;
}

function initLinks(isLoggedOn){
	var html = '<div class="middlewidth">';
	html += '<div id="navigation">'
	//public links
	for(var i=0; i< publicLinks.length; i++){
		html += '<a href="';
		html += publicLinks[i][0];
		html += '">';
		html += publicLinks[i][1];
		html += '</a><div class="green"> | </div>';
	}

	if(isLoggedOn){
		//private links
		for(var i=0; i< privateLinks.length; i++){
			html += '<a href="';
			html += privateLinks[i][0];
			html += '">';
			html += privateLinks[i][1];
			html += '</a><div class="green"> | </div>';
		}
	};
	html += '</div>';	//close navigation div


	html += '<div id="login">'
	if(!isLoggedOn){
		html += '<a href="/login">Log In</a>'
	}
	else {
		html += '<a href="/login">Log Out</a>'
	}
	html += '</div>' // close login div
	html += '</div>'	//close middlewith div 
	// set html to a container


	$("#bottombanner").append(html);
}