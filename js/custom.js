// Dropdown nav for mobile usage
function dropdown() {
    $("#myNav").addClass("solid");
    var content = document.getElementById("navbarCollapse");
    if (content.style.display === "block") {
        content.style.transition = ".5s";
        content.style.display = "none";
    }
    else {
        content.style.transition = ".3s";
        content.style.display = "block";
    }

    $(window).scroll(function () {
        content.style.transition = ".3s";
        content.style.display = "none";
    });
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex, 'slides1');
showSlides(slideIndex, 'slides2');
showSlides(slideIndex, 'slides3');

// Next/previous controls
function plusSlides(n, slides) {
    showSlides(slideIndex += n, slides);
}

// Thumbnail image controls
function currentSlide(n, slides) {
    showSlides(slideIndex = n, slides);
}

function showSlides(n, slides) {
    var i;
    var slides = document.getElementsByClassName(slides);
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}