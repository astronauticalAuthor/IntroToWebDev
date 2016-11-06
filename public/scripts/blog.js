var postsDisplayLocation;
var contentArea;
var Allposts;
var isLoggedIn;

function getPosts() {
    $.ajax({
        url: 'https://csse280-term-project-backend.herokuapp.com/posts'
        // url: 'http://localhost:3000/posts'
    }).done(function (data){
        displayPosts(data);
    });
}

function displayPosts(posts) {
    for (var x = 0; x < posts.length; x++) {
        var html = '<div class="post">';
        html += 'Title: ' + posts[x].title + '<br />';
        html += posts[x].body + '<br />';
        html += posts[x].datePosted + '</div><hr />';

        $("#blogPosts").append(html);
    }
}

function addPoster() {
    isLoggedIn = true;
    if(!isLoggedIn){
        return;
    }
    var html = '<form id="login_form">';
    html += '<p> Post Title:</p>'
    html += '<input type="text" name="postTitle"/>';
    html += '<p> Post Body: </p>';
    html += '<input type="text" name="postBody" class="paragraphInput"/>';
    html += '</p><input type="button" name="postSubmit" value="Post it!"/></p>';
    html += '</form>';

    $("#contentarea").append(html);
}