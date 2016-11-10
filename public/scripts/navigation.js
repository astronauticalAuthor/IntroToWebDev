var publicLinks = [["/", "Home"], ["/about", "About"], ["/rush", "Rush"], ["/executives","Executives"],["/blog","Blog"]];
var privateLinks = [["/schedule", "Schedule"],["/trees","Trees"]];

function mainNavigation() {
	var url = 'https://csse280-term-project-backend.herokuapp.com';
	// var url = 'http://localhost:3000';

	$.ajax({
		url: url + '/login/login/checkLoggedIn',
		method: 'POST',
		data: {
			guid: document.cookie
		}
	}).done(function (data) {
		initLinks(data.loggedIn);
	});
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
		// html += 'Hi, Member!'
		// html += '<div class="green"> | </div>';
		html += '<a href="" onclick="logout()">Log Out</a>'
	}
	html += '</div>' // close login div
	html += '</div>'	//close middlewith div 
	// set html to a container

	$("#bottombanner").append(html);
}

function logout() {
	document.cookie = '';
}