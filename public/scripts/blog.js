var theURL= 'http://localhost:3000';
// var theURL = 'https://csse280-term-project-backend.herokuapp.com'

function setUpBlog() {
    addPoster();
    $("#postSubmit").click(function(){
        postPost();
    });
}

function getPosts(postFunc) {
    $.ajax({
        url: theURL + '/posts'
    }).done(function (data){
        postFunc(data);
    });
}

function displayAdminPosts(posts) {
    for (var x = 0; x < posts.length; x++) {
        var id = posts[x]._id.trim();
        var html = '<div class="post" id="' + id + '">';
        html += '<p class="title">' + posts[x].title + '</p>';
        html += '<p class="postBody">' + posts[x].body + '</p>'
        html += '<p class="date">' + posts[x].datePosted + '</p>';
        html += '<button onclick="deletePost(\'' + id + '\')">Delete</button>';
        html += '<button onclick="editPost(\'' + id + '\')">Edit</button>';
        html += '</div><hr />';

        $("#blogPosts").append(html);
    }
}

function displayPosts(posts) {
    for (var x = 0; x < posts.length; x++) {
        var id = posts[x]._id.trim();
        var html = '<div class="post" id="' + id + '">';
        html += '<p class="title">' + posts[x].title + '</p>';
        html += '<p class="postBody">' + posts[x].body + '</p>'
        html += '<p class="date">' + posts[x].datePosted + '</p>';
        html += '</div><hr />';

        $("#blogPosts").append(html);
    }
} 

function deletePost(id) {
    $.ajax({
        url: theURL + '/posts/' + id,
        method: 'DELETE'
    }).done(function (data) {
        window.location.replace("/blog");
    });
}

function editPost(id) {
    var title = $('#' + id + ' .title').text();
    var body = $('#' + id + ' .postBody').text();
    var date = $('#' + id + ' .date').text();

    $('#' + id).empty();
    var html = 'Post Title:<br /><input type="text" class="title" value="' + title + '" /><br />';
    html += 'Post Body:<br /><textarea rows="10" cols="100" class="body">' + body + '</textarea><br />';
    html += 'Date Posted:<br /><input type="text" class="date" value="' + date + '" /><br />';
    html += '<button onclick="saveEditedPost(\'' + id + '\')">Save</button> ';
    html += '<button onclick="cancelEditing()">Cancel</button>';

    $('#' + id).append(html);
}

function saveEditedPost(id) {
    $.ajax({
        url: theURL + '/posts/' + id,
        method: 'PUT',
        data: {
            title: $('#' + id + ' .title').val(),
            body: $('#' + id + ' .body').val(),
            datePosted: $('#' + id + ' .date').val()
        }
    }).done(function (data) {
        window.location.replace('/blog');
    });
}

function cancelEditing() {
    window.location.replace("/blog");
}

function addPoster() {
    $.ajax({
        // url: theURL + '/login/login/checkLoggedIn',
        url: 'login/login/checkLoggedIn',
        method: 'POST',
        data: {
            guid: document.cookie
        }
    }).done(function (data) {
        if (data.loggedIn) {
            getPosts(displayAdminPosts);

            var html = '<form id="loginForm" action="../posts" method="POST">';
            html += '<p> Post Title:</p>'
            html += '<input type="text" name="title"/>';
            html += '<p> Post Body: </p>';
            html += '<input type="text" name="body" class="paragraphInput"/>';
            html += '<p><button type="submit">Post it!</button></p>';
            html += '</form>';

            $("#contentarea").append(html);
        }
        else {
            getPosts(displayPosts);
        }
    });    
}

function postPost() {
    var aForm = $('#loginForm');
    var aTitle = aForm.title;
    var aBody = aForm.body;
    $.ajax({
        method: "POST",
        url: theURL + '/posts',
        data: { title: aTitle, body: aBody}
    }).done(function (){
        window.location.replace("/blog");
    });
}