<!DOCTYPE html>
<html>
<head>
	<title>CSS Grid</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="./css/styles.css">
</head>
<body>
	<div class="wrapper">

	<section class="welcome-section sections">
      <h1>Hey I'm Alan</h1>
      <p>a web developer</p>
    </section>

    <section class="carousel-section sections">
      <h2>Carousel</h2>
      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <img src="./images/img1.jpeg" style="width:100%">
        </div>

        <div class="mySlides fade">
          <img src="./images/img2.jpeg" style="width:100%">
        </div>

        <div class="mySlides fade">
          <img src="./images/img3.jpeg" style="width:100%">
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
        <a id="pause-play-timer" class="play-timer" onclick="pausePlayTimer()">&#9646;&#9646;</a>
      </div>
      <br>

      <!-- The dots/circles -->
      <div class="dots-container" style="text-align:center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </section>

    <section class="contact-section sections">
      <h2>Socials</h2>
      <div class="contact-links">
        <div class="contact-link-item">
          <a href="https://github.com/AlanWong-1992" class="btn contact-details">
            <i class="fa fa-github" aria-hidden="false"></i>Github
          </a>
        </div>
        <div class="contact-link-item">
          <a href="https://www.codewars.com/users/alanw-developer" class="btn contact-details">
            <i class="fa fa-code" aria-hidden="false"></i>Codewars
          </a>
        </div>
        <div class="contact-link-item">  
          <a href="https://www.freecodecamp.org/alanw-developer" class="btn contact-details">
            <i class="fa fa-free-code-camp" aria-hidden="false"></i>  freeCodeCamp
          </a>
        </div>
      </div>
    </section>

	</div>
  <script type="text/javascript" src="./js/slideshow.js"></script>
</body>
</html>