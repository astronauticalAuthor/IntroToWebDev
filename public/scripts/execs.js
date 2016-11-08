function loadExecs() {
	  var url = 'https://csse280-term-project-backend.herokuapp.com/executiveInfo';
    // if (process.env.NODE_ENV === 'production') {
    //   url = 'https://csse280-term-project-backend.herokuapp.com/executiveInfo'
    // }
  $.ajax({
		url: url
	}).done(function(data) {
      for (var key in data) {
        var exec = '<div class="execBlock">';
        exec += '<img src="images/' + key + '.jpg" class="execImage" />';
        exec += key + ' - ' + data[key];
        exec += '</div>';

        $('#contentarea').append(exec);
      }
    })
}