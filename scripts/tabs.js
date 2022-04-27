// what-we-do.html - tabs interactivity

// When workshops-button is clicked:
$("#workshops-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #workshops-content
  $("#workshops-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("second-tab-content");
  $(".tab-content").removeClass("third-tab-content");
  $(".tab-content").removeClass("fourth-tab-content");
  $(".tab-content").removeClass("fifth-tab-content");
  $(".tab-content").removeClass("sixth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("first-tab-content");
});


// When pt-button is clicked:
$("#pt-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #pt-content
  $("#pt-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("first-tab-content");
  $(".tab-content").removeClass("third-tab-content");
  $(".tab-content").removeClass("fourth-tab-content");
  $(".tab-content").removeClass("fifth-tab-content");
  $(".tab-content").removeClass("sixth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("second-tab-content");
});


// When fast-covers-button is clicked:
$("#fast-covers-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #fast-covers-content
  $("#fast-covers-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("first-tab-content");
  $(".tab-content").removeClass("second-tab-content");
  $(".tab-content").removeClass("fourth-tab-content");
  $(".tab-content").removeClass("fifth-tab-content");
  $(".tab-content").removeClass("sixth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("third-tab-content");
});


// When socials-button is clicked:
$("#socials-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #socials-content
  $("#socials-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("first-tab-content");
  $(".tab-content").removeClass("second-tab-content");
  $(".tab-content").removeClass("third-tab-content");
  $(".tab-content").removeClass("fifth-tab-content");
  $(".tab-content").removeClass("sixth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("fourth-tab-content");
});


// When beginner-button is clicked:
$("#beginner-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #beginner-content
  $("#beginner-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("first-tab-content");
  $(".tab-content").removeClass("second-tab-content");
  $(".tab-content").removeClass("third-tab-content");
  $(".tab-content").removeClass("fourth-tab-content");
  $(".tab-content").removeClass("sixth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("fifth-tab-content");
});


// When auditions-button is clicked:
$("#auditions-button").click(function() {
  // add class .hidden to all other tab elements
  $(".tab-content").addClass("hidden");
  // remove class .hidden to #auditions-content
  $("#auditions-content").removeClass("hidden");

// Tab content background color changed to match the tab button that was clicked
  // Removing past-clicked tab content color
  $(".tab-content").removeClass("first-tab-content");
  $(".tab-content").removeClass("second-tab-content");
  $(".tab-content").removeClass("third-tab-content");
  $(".tab-content").removeClass("fourth-tab-content");
  $(".tab-content").removeClass("fifth-tab-content");
  // Tab content now matching tab button, via order
  $(".tab-content").addClass("sixth-tab-content");
});
