var postsDisplayLocation;
var contentArea;
var Allposts;

// make ajax call to get all the posts from api
function getPosts() {
    console.log('ajax?');
    $.ajax({
        url: 'http://localhost:3000/posts'
    }).done(function (data){
        console.log(data);
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
    contentArea = $(document).getElementById('#contentarea').setAttribute('background-color','red');        
    // contentArea = document.getElementById('#contentarea');
    postsDisplayLocation = document.createElement("p");
    posts.forEach(function (post) {
        postsDisplayLocation.appendChild(
            // document.createTextNode(post[title])
            $(document).createTextNode("noodle")
        );
    });
    contentArea.appendChild(postsDisplayLocation);
}