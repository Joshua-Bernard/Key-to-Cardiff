$(document).ready(function () {

});
// -------------------- Credit Key: 1. Nav Start --------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
// -------------------- Credit Key: 2. Gallery Start --------------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// -------------------- Gallery Credit Key: 2. End --------------------
//-------------------- Light/ Dark mode --------------------

// Listen for a click on the button
$(".btn-theme-toggle").click(function () { // When btn with this class is clicked
    
    if ($("#theme-link").attr("href") == "assets/css/light-theme.css") {// If the current URL contains the light theme
        // ... then switch it to "dark-theme.css"
        $("#theme-link").attr("href", "assets/css/dark-theme.css") // It will procede to change theme to dark theme
    } else {
        $("#theme-link").attr("href", "assets/css/light-theme.css") //Otherwise it will change to light theme
    }
});
