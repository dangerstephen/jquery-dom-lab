'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
  //var helloThere =$()
$("#greeting").text();
  // 2. Change (or set) the value to "Hola".
$("#greeting").text("Hola");
  // 3. Add an h1 to the page that says "A Spanish Greeting".
$("body").before("<h1>A Spanish Greeting</h1>");
//.before will add it at the start


  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
$("body").append("<div>Que tal?</div>");
//.append adds it after


  // 5. Add the class "blue" to both greetings.
 $("div").addClass("blue");

 // #=ID .=class)
 //so if it was to add a class to JUST ONE OF THEM becuase thats an id it would
 //be .addID

});
