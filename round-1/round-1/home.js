//variables
let hamBurger = document.querySelector(".hamBurgerMenu");
let navMenu = document.querySelector(".nav");

//functions

//======================================================
//OpenMenu Function: to open nav bar and close nav bar
const openMenu = () => {
  let hamBlocks = document.getElementsByClassName("blocks");
  if (hamBlocks[1].style.display !== "none") {
    hamBlocks[0].style.transform = "rotateZ(45deg) translateY(7px)";
    hamBlocks[1].style.display = "none";
    hamBlocks[2].style.transform = "rotateZ(-45deg) translateY(-7px)";
    navMenu.style.display = "flex";
  } else {
    hamBlocks[0].style.transform = "rotateZ(0deg) translateY(0px)";
    hamBlocks[1].style.display = "block";
    hamBlocks[2].style.transform = "rotateZ(0deg) translateY(0px)";
    navMenu.style.display = "none";
  }
};

//===============================================
//slide show function
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
