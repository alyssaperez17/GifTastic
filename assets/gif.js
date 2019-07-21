
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

$(document).on("click", "superheroes", function(){


var superPower = $(this).attr("data");
var apiKey = "ptRdKwscc7MtTD2Mp1U3iz3Wx6pIPRHT";
var queryURL = "https://api.giphy.com/v1/gifs/search" + superPower + "&api_key=" + apiKey + "&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response){

});

var results = response.data;

for (var j=0, j < results.length; j++) {
        var newDiv = $('<div>');
        var newView = results[j].images.fixed_height.url;
        var still = results[j].images.fixed_height.still.url;
}

}

 