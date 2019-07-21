
var topics = ["superwoman", "captain marvel", "wonderwoman", "black widow", "batgirl", "she hulk"];


//loops through array 

function renderButtons() {
    $("#hero-buttons").empty();
    for (i = 0; i < topics.length; i++) {
        $("#hero-buttons").append("<button class='superheroes' data-name='" + topics[i] + "'>" + topics[i] + "</button>");
    }
}

renderButtons();

// supposed to show gifs, can't figure this one out

$(document).on("click", "data-name", function () {


    var superPower = $(this).attr("data");
    var apiKey = "ptRdKwscc7MtTD2Mp1U3iz3Wx6pIPRHT";
    var queryURL = "https://api.giphy.com/v1/gifs/search" + superPower + "&api_key=" + apiKey + "&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })      

        .done(function (response) {
            $("#gifsView").empty();
            var results = response.data;
            if (results === "") {
                alert("None here!");
            }

        });

    for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div1>");
        

        var theImage = $("<img>");

        theImage.attr("src", results[i].images.fixed_height_small_still.url);

        theImage.attr("data-still", results[i].images.fixed_height_small_still.url);

        theImage.attr("data-animate", reults[i].images.fixed_height_small_small.url);

        theImage.attr("data-state", "still");

        theImage.addClass("image");


        newDiv.append(theImage);


    }
});



