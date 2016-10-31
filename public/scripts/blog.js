(function () {
    "use strict";
    var apiUrl = "ktpappdata/posts";
    var postsDisplayLocation;
    var Allposts;

    // make ajax call to get all the posts from api
    function getPosts() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'JSON',
            success: function (data) {
                if (data) {
                    Allposts = data;
                    displayPosts(Allposts);
                } else {
                    console.log("Post not Found");
                }
            },
            error: function (request, status, error) {
                console.log(error, status, request);
            }
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
        postsDisplayLocation = document.createElement("p");
        posts.forEach(function (post) {
            contactsDisplayLocation.appendChild(
                document.createTextNode(post[title])
            );
        });
    }

    $(document).ready(function () {
        // get contacts from api
        getPosts();
    });

})();