function open(accordion_number) {
  $('#accordion-content-'+ accordion_number).removeClass('hidden');
  $('#accordion-button-'+ accordion_number).addClass('hidden');
  $('#accordion-close-'+ accordion_number).removeClass('hidden');
}

function close(accordion_number) {
  $('#accordion-content-'+ accordion_number).addClass('hidden');
  $('#accordion-button-'+ accordion_number).removeClass('hidden');
  $('#accordion-close-'+ accordion_number).addClass('hidden');
}

// when accordion-1 is clicked:
$('#accordion-button-1').click(function() {
  open("1")
})
$('#accordion-close-1').click(function() {
  close("1")
})

// when accordion-2 is clicked:
$('#accordion-button-2').click(function() {
  open("2")
})
$('#accordion-close-2').click(function() {
  close("2")
})

// when accordion-3 is clicked:
$('#accordion-button-3').click(function() {
  open("3")
})
$('#accordion-close-3').click(function() {
  close("3")
})

// when accordion-4 is clicked:
$('#accordion-button-4').click(function() {
  open("4")
})
$('#accordion-close-4').click(function() {
  close("4")
})

// when accordion-5 is clicked:
$('#accordion-button-5').click(function() {
  open("5")
})
$('#accordion-close-5').click(function() {
  close("5")
})

// when accordion-6 is clicked:
$('#accordion-button-6').click(function() {
  open("6")
})
$('#accordion-close-6').click(function() {
  close("6")
})

// when accordion-7 is clicked:
$('#accordion-button-7').click(function() {
  open("7")
})
$('#accordion-close-7').click(function() {
  close("7")
})

// when accordion-8 is clicked:
$('#accordion-button-8').click(function() {
  open("8")
})
$('#accordion-close-8').click(function() {
  close("8")
})

// when accordion-9 is clicked:
$('#accordion-button-9').click(function() {
  open("9")
})
$('#accordion-close-9').click(function() {
  close(9)
})

// when accordion-10 is clicked:
$('#accordion-button-10').click(function() {
  open("10")
})
$('#accordion-close-10').click(function() {
  close("10")
})


// When user clicks on the icon on an accordion header element:
// $("#accordion-button-1").click(function() {
//   $("#accordion-button-1").addClass("hidden");
// })
//   if value of contents property of accordion-header::after is "+":
//     remove hidden class from its respective accordion content
//     change value of contents property of accordion-header::after to be "-"
//
//   else:
//     add hidden class to its respective accordion content element
//     change value of contents property of accordion-header::after to be "+"
