// Existing JavaScript code for slideshows
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".image-slide, .video-slide");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const captionText = document.querySelector(".caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
  captionText.innerHTML = slides[slideIndex - 1].alt || "Video";
}
