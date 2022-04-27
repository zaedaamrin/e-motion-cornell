const SLIDES = $(".slides>.dis-img");

function nextSlide() {
  let nextNum = SLIDES.index($(".dis-img:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".dis-img:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  const DOTS = $(".dots>.circle");
  let currentDot = DOTS.eq(index);
  DOTS.removeClass("click");
  currentDot.addClass("click");
}

$("#go-right").click(function() {
    nextSlide();
    });

$("#go-left").click(function() {
    prevSlide();
  });
$('#dot1').click(function() {
  showSlide(1);
})
$('#dot2').click(function() {
  showSlide(2);
})
$('#dot3').click(function() {
  showSlide(3);
})
