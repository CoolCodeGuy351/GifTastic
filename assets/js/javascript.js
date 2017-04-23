/* Javasccript & jquery */

/*
--When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

--When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

--Under every gif, display its rating (PG, G, so on). 

   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

--Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
*/

$(document).ready(function(){

var topButtons = ["Zoolander","Silicon Valley","It's Happening","Tropic Thunder","And its gone","Dumb and Dumber","Anchorman","Ace Ventura","Office Space","Boss Baby","Waynes World","Pee Wees Big Adventure","Monty Python and the Holy Grail","Blazing Saddles"];

renderButtons();


// When you click the gifs that were rendered to the page you change the data state from animate to still

$(".gif").on("click", function() {

      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

function renderGifs() {

        var gifName = $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&limit=10&api_key=dc6zaTOxFJmzC";

        // Creating an AJAX call for the specific gif button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          for(var i = 0 ; i < 10 ; i++){

          // Creating a div to hold the gif
          var gifDiv = $("<div class='gifBlock'>").css('display','inline-block');
          // Grab the rating for the button clicked and store it in a variable

          var rating = response.data[i].rating;
          var gifImageURL = response.data[i].images.fixed_height_still.url;
          var gifGifURL = response.data[i].images.fixed_height.url;
          var gifState = "still";

          var gifImage = $('<img>').attr("src", gifImageURL).attr("data-animate", gifGifURL).attr("data-still", gifImageURL).attr("data-state", gifState).css('display','block');
          var ratingContent = $("<p>Rating: " + rating + "</p>");

          gifDiv.append(gifImage);
          gifDiv.append(rating);

          // Putting the entire gif above the previous gifs
          $("#div-main-section").append(gifDiv);

        }

        });

}

 function renderButtons() {

        // Deleting the gifs prior to adding new gifs
        $("#top-container").empty();
        for (var i = 0; i < topButtons.length; i++) {
          var buttonGen = $("<button>");
          // Adding a class of gif to our button
          buttonGen.addClass("gifButton");
          // Adding a data-attribute
          buttonGen.attr("data-name", topButtons[i]);
          // Providing the initial button text
          buttonGen.text(topButtons[i]);
          // Adding the button to the buttons-view div
          $("#top-container").append(buttonGen);
        }
      }

	$("#sub-button").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gifVar = $("#text-input").val().trim();
        // Adding gif from the textbox to our array
        topButtons.push(gifVar);
        // Calling renderButtons which handles the processing of our gif array
        renderButtons();

      });

      // Adding a click event listener to all elements with a class of "gif"
      $(document).on("click", ".gifButton", renderGifs);
      // Calling the renderButtons function to display the intial buttons
      renderButtons();

});


