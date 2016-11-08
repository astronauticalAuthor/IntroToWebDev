function login() {
	var url = 'https://csse280-term-project-backend.herokuapp.com';

	$.ajax({
		url: url + '/login/login',
		method: 'POST',
		data: {
			username: $('#username').val(),
			password: $('#password').val()
		}
	}).done(function (data) {
		if (data.loggedIn == "true") {
			document.cookie = data.guid;
			window.location.replace('/');
		}
	});
}
