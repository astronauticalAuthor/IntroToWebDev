function loadExecs() {
	$.ajax({
		url: "http://localhost:3000/executiveInfo"
	})
    .done(function(data) {
      for (var key in data) {
        // $('#contentarea').append('<div>' + key + ': ' + data[key] + '</div>');
        var exec = '<div class="execBlock">';
        exec += '<img src="images/' + key + '.jpg" class="execImage" />';
        exec += key + ' - ' + data[key];
        exec += '</div>';



        $('#contentarea').append(exec);
      }



    })
}