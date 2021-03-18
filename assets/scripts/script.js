
// -------------------- Credit Key: 1. Nav Start --------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "10px";
    document.body.style.backgroundColor = "white";
}

$(document).ready(function () {

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
    $("#btn-theme-toggle").click(function () { // When btn with this class is clicked

        if ($("#theme-css-link").attr("href") == "assets/css/light-theme.css") {// If the current URL contains the light theme
            darkTheme()// It will procede to change theme to dark theme

        } else {
            lightTheme() //Otherwise it will change to light theme

        }
    });

    function darkTheme() {
        $("#nav-toggle-status").text("ON");
        $("#theme-css-link").attr("href", "assets/css/dark-theme.css");
        $("#welcome-img").attr("src", "https://i.imgur.com/cUhoowO.png");
        $("#gallery-img-1").attr("src", "https://i.imgur.com/WhlQalJ.jpg");
        $("#gallery-img-2").attr("src", "https://i.imgur.com/4jAiZ93.jpg");
        $("#gallery-img-3").attr("src", "https://i.imgur.com/LredMab.jpg");
        $("#gallery-img-4").attr("src", "https://i.imgur.com/elYWsiQ.jpg");
        $("#gallery-img-5").attr("src", "https://i.imgur.com/hadVWGe.jpg");
        $("#gallery-img-6").attr("src", "https://i.imgur.com/hmv36N2.jpg");
        $("#gallery-img-7").attr("src", "https://i.imgur.com/r8IpefH.jpg");
        $("#gallery-img-8").attr("src", "https://i.imgur.com/DO2e1t3.png");
        $("#gallery-img-9").attr("src", "https://i.imgur.com/cp2I8So.jpg");
        $("#gallery-img-10").attr("src", "https://i.imgur.com/D5r69Lk.jpg");
    }

    function lightTheme() {
        $("#nav-toggle-status").text("OFF");
        $("#theme-css-link").attr("href", "assets/css/light-theme.css");
        $("#welcome-img").attr("src", "https://i.imgur.com/mnNoobI.jpg");
        $("#gallery-img-1").attr("src", "https://i.imgur.com/j9zelrn.jpg");
        $("#gallery-img-2").attr("src", "https://i.imgur.com/5fAL56I.jpg");
        $("#gallery-img-3").attr("src", "https://i.imgur.com/cxRKNdc.jpg");
        $("#gallery-img-4").attr("src", "https://i.imgur.com/fqnJWyb.jpg");
        $("#gallery-img-5").attr("src", "https://i.imgur.com/DO7sIhp.jpg");
        $("#gallery-img-6").attr("src", "https://i.imgur.com/6V7DXPz.jpg");
        $("#gallery-img-7").attr("src", "https://i.imgur.com/GNBy6tk.jpg");
        $("#gallery-img-8").attr("src", "https://i.imgur.com/BKODw34.jpg");
        $("#gallery-img-9").attr("src", "https://i.imgur.com/DPhy0OA.png");
        $("#gallery-img-10").attr("src", "https://i.imgur.com/D5r69Lk.jpg");
    }

});