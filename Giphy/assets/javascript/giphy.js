$( document ).ready(function() {
    // Such testing
    // alert( "ready!" );
    // var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Tq8B7KEcSY0bdgmhn4vfbe2YTtWbbpEi&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });

    var topics = ["Star Trek", "Star Wars", "Seinfeld", "cats", "hedgehogs", "hockey", "Batman"]

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




//TODO - Why do these disappear when I click them?????
 $("#search-button").on("click", function(event) {
    event.preventDefault()
    var userSearch = $("#gif-search").val().trim()
    topics.push(userSearch)
    // $("#gif-search").each(function() {
    //     $(this).empty()
    // })
    renderButtons()
 })




// TODO Why is it only giving me gifs when I hit the search button?
    $("button").click(function() {
        var gifs = $(this).attr("gif-subject")
        // This chunk of code will perform the giphy search based on the value of the button
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=Tq8B7KEcSY0bdgmhn4vfbe2YTtWbbpEi&limit=5"
        
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
                searchResults.attr("src", results[i].images.fixed_height.url)
                searchResults.append(p)
                $("#gif-display").prepend(searchResults)
            }

        })
    })






    renderButtons()
});