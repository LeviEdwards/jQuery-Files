//Problem: User clicking image goes to dead end
//Solution: Create overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay
$overlay.append($image);
//A caption
$overlay.append($caption);
//Add Overlay
$("body").append($overlay);
  
  


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update the overlay with the image linked in the link
  $image.attr("src",imageLocation)
  // Show the overlay
  $overlay.show();
  //Get child alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
 });
  

//When overlay is clicked
  
$overlay.click(function(){
  //hide the overlay
  $overlay.hide();
});