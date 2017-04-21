/* Javasccript & jquery */

$(document).ready(function(){

var topButtons = ["Zoonlander","Silicon Valley","Tropic Thunder","And its gone","Dumb and Dumber","Anchorman","Ace Ventura","Office Space","Boss Baby","Waynes World","Pee Wees Big Adventure","Monty Python and the Holy Grail","Blazing Saddles"];

 function renderButtons() {

        // Deleting the movies prior to adding new movies
        $("#top-container").empty();

        // Looping through the array of movies
        for (var i = 0; i < topButtons.length; i++) {

          var buttonGen = $("<button>");
          // Adding a class of movie to our button
          buttonGen.addClass("gif");
          // Adding a data-attribute
          buttonGen.attr("data-name", topButtons[i]);
          // Providing the initial button text
          buttonGen.text(topButtons[i]);
          // Adding the button to the buttons-view div
          $("#top-container").append(buttonGen);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding movie from the textbox to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".gif", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


});