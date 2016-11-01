var postsDisplayLocation;
var contentArea;
var Allposts;

function getPosts() {
    $.ajax({
        url: 'https://csse280-term-project-backend.herokuapp.com/posts'
    }).done(function (data){
        displayPosts(data);
    });
}

// // save contact to update in browser storage and go to update page
// function contactRowClickHandler(contact) {
//     var error = false;
//     function contactWithID(thiscontact) {
//         return thiscontact._id === contact._id;
//     }
//     var contactToUpdate = Allcontacts.filter(contactWithID)[0];
//     try {
//         var contactToUpdateString = JSON.stringify(contactToUpdate);
//         sessionStorage.setItem("contactToUpdate", contactToUpdateString);
//     } catch (e) {
//         alert("Error when writing to Session Storage " + e);
//         error = true;
//     }
//     if (!error) {
//         window.location = "update.html";
//         return false;
//     }
// }

function displayPosts(posts) {
    for (var x = 0; x < posts.length; x++) {
        var html = '<div class="blogPosts">';
        html += 'Title: ' + posts[x].title + '<br />';
        html += posts[x].body + '<br />';
        html += posts[x].datePosted + '</div><hr />';

        $("#contentarea").append(html);
    }
}