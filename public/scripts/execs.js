function loadExecs() {
	$.ajax({
		url: "https://csse280-term-project-backend.herokuapp.com/executiveInfo"
	})
    .done(function(data) {
      for (var key in data) {
        var exec = '<div class="execBlock">';
        exec += '<img src="images/' + key + '.jpg" class="execImage" />';
        exec += key + ' - ' + data[key];
        exec += '</div>';

        $('#contentarea').append(exec);
      }
    })
}