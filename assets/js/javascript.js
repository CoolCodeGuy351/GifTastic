/* Javasccript & jquery */

$(document).ready(function(){

var topButtons = ["Zoonlander","Silicon Valley","Tropic Thunder","And its gone","Dumb and Dumber","Anchorman","Ace Ventura","Office Space","Boss Baby","Waynes World","Pee Wees Big Adventure","Monty Python and the Holy Grail","Blazing Saddles"];

renderButtons();
/*
function run() {


        var movie = $(this).attr("data-name");
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";


        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the movie
          var movieDiv = $("<div class='movie'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          movieDiv.append(pOne);

          // Storing the release year
          var released = response.Released;

          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Released: " + released);

          // Displaying the release year
          movieDiv.append(pTwo);

          // Storing the plot
          var plot = response.Plot;

          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          movieDiv.append(pThree);

          // Retrieving the URL for the image
          var imgURL = response.Poster;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          movieDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#movies-view").prepend(movieDiv);
        });

*/

 function renderButtons() {

        // Deleting the movies prior to adding new movies
        $("#top-container").empty();


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

	$("#sub-button").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gifVar = $("#text-input").val().trim();

        // Adding movie from the textbox to our array
        topButtons.push(gifVar);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".gif", run);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


});