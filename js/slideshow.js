var slideIndex = 1;
showSlides(slideIndex);

var myTimer = setInterval(changeSlide, 3000, 1);

// Next/previous controls
function changeSlide(n) {
  showSlides(slideIndex += n);
  var pausePlayBtn = document.getElementById("pause-play-timer");
  if (pausePlayBtn.classList.contains("play-timer")) {
    clearInterval(myTimer);
    myTimer = setInterval(changeSlide, 3000, 1);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.height = "20rem";
  slides[slideIndex-1].style.width = "20rem";
  dots[slideIndex-1].className += " active";
}

function pausePlayTimer() {
  clearInterval(myTimer);
  var pausePlayBtn = document.getElementById("pause-play-timer");
  pausePlayBtn.classList.toggle("play-timer");
  pausePlayBtn.classList.contains("play-timer") ? myTimer = setInterval(changeSlide, 3000, 1) : clearInterval(myTimer);
  pausePlayBtn.classList.contains("play-timer") ? pausePlayBtn.innerHTML = "&#9646;&#9646;" : pausePlayBtn.innerHTML = "&#9654;";
}

// Key Press Event Listener

document.onkeydown = function(event) {
  switch (event.keyCode) {
     case 37:
        changeSlide(-1);
        break;
     case 39:
        changeSlide(1);
        break;
  }
};