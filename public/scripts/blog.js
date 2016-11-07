var postsDisplayLocation;
var contentArea;
var Allposts;
var isLoggedIn;
// var theURL= 'http://localhost:3000';
var theURL = 'https://csse280-term-project-backend.herokuapp.com/posts'

function setUpBlog() {
    getPosts();
    addPoster();
    $("#postSubmit").click(function(){
        postPost();
    });
}

function getPosts() {
    $.ajax({
        url: theURL + '/posts'
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
    var html = '<form id="loginForm" action="../posts" method="POST">';
    html += '<p> Post Title:</p>'
    html += '<input type="text" name="title"/>';
    html += '<p> Post Body: </p>';
    html += '<input type="text" name="body" class="paragraphInput"/>';
    html += '<p><button type="submit">Post it!</button></p>';
    html += '</form>';

    $("#contentarea").append(html);
}

// function postPost() {
//     var aForm = $('#loginForm');
//     var aTitle = aForm.title;
//     var aBody = aForm.body;
//     $.ajax({
//         method: "POST",
//         url: theURL + '/posts',
//         data: { title: aTitle, body: aBody}
//     }).done(function (){
//         console.log("It thinks it finished?");
//         window.location.replace("/blog");
//     });
// }