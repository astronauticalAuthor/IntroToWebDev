var postsDisplayLocation;
var contentArea;
var Allposts;

// make ajax call to get all the posts from api
function getPosts() {
    console.log('ajax?');
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

// dynamically display all the contacts from api
function displayPosts(posts) {
    postsDisplayLocation = $(document.createElement('ul'));
    posts.forEach(function (post) {
        postsDisplayLocation.append(
            $($(document.createElement('div.blogPosts')).append(
                $(document.createElement('div.blogPost')).append(
                    $($(document.createElement('h3.title')).append(
                        $(document.createTextNode("Title:" + post["title"]))
                    )),
                    $("br"),
                    $($(document.createElement('p')).append(
                        $(document.createTextNode(post["body"]))
                    )),
                    $($(document.createElement('p.small')).append(
                        $(document.createTextNode(post["datePosted"]))
                    )),
                    $("<hr>")
                )
            ))
        );
    });
    
    $("#contentarea").append(postsDisplayLocation);
}