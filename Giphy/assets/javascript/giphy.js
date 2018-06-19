$( document ).ready(function() {
    // Such testing
    // alert( "ready!" );
    // var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Tq8B7KEcSY0bdgmhn4vfbe2YTtWbbpEi&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });

    var topics = ["Star Trek", "Star Wars", "Doctor Who", "Seinfeld", "Cats", "Hedgehogs", "Hockey", "Batman", "30 Rock"]

    // Time to make the buttons
function renderButtons() {
    console.log(topics)
    $("#buttons").empty()
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>")
        b.attr("gif-subject", topics[i])
        b.attr("button", topics[i])
        b.addClass("button")
        b.addClass("userChoice")
        b.text(topics[i])
        $("#buttons").append(b)
    }
}




//TODO - Why won't this empty after search?
 $("#search-button").on("click", function(event) {
    event.preventDefault()
    var userSearch = $("#gif-search").val().trim()
    topics.push(userSearch)
    $("#gif-search").val("")
    // $("#gif-search").each(function() {
    //     $(this).empty()
    // })
    renderButtons()
 })




// FIXED - Why is it only giving me the same gifs when I hit the search button?
    $("#buttons").on("click", ".userChoice", function(event) {
        event.preventDefault()
        var gifs = $(this).attr("gif-subject")
        console.log(gifs)
        // This chunk of code will perform the giphy search based on the value of the button
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=Tq8B7KEcSY0bdgmhn4vfbe2YTtWbbpEi&limit=10"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response)
            var results = response.data
            for (var i = 0; results.length; i++) {
                var resultsDiv = $("<div>")
                var p = $("<p>").text("Rating: " + results[i].rating)
                var searchResults = $("<img>")
                // searchResults.attr("src", results[i].images.fixed_height.url)

                // // New, let's see.
                searchResults.attr("src", results[i].images.fixed_height_still.url)
                searchResults.attr({"data-animate" : results[i].images.fixed_height.url})
                searchResults.attr({"data-state" : "still"})
                searchResults.attr({"data-still" : results[i].images.fixed_height_still.url})
                // searchResults.attr({"data-state" : "animate"})
                searchResults.addClass("gif")
                
                // New, let's see
                resultsDiv.append(searchResults)
                resultsDiv.append(p)
                $("#gif-display").prepend(resultsDiv)
            }
        })
    })

    $("body").on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        console.log("clicked!")
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
    });




    renderButtons()
});

