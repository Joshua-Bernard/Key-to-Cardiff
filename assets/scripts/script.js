
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
// -------------------- Credit Key: 1. Nav End --------------------
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
        if (n > slides.length) { slideIndex = 1 };
        if (n < 1) { slideIndex = slides.length };
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    // -------------------- Credit Key: 2. Gallery End --------------------
    $("#prev-slide").click(function () { plusSlides(-1) });
    $("#next-slide").click(function () { plusSlides(1) });
    $("#dot-1").click(function () { currentSlide(1) });
    $("#dot-2").click(function () { currentSlide(2) });
    $("#dot-3").click(function () { currentSlide(3) });
    $("#dot-4").click(function () { currentSlide(4) });
    $("#dot-5").click(function () { currentSlide(5) });
    $("#dot-6").click(function () { currentSlide(6) });
    $("#dot-7").click(function () { currentSlide(7) });
    $("#dot-8").click(function () { currentSlide(8) });
    $("#dot-9").click(function () { currentSlide(9) });
    $("#dot-10").click(function () { currentSlide(10) });

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
        $("#welcome-img").attr("alt", "View of Cardiff central from the river taff in the night.");
        $("#gallery-img-1").attr("src", "https://i.imgur.com/WhlQalJ.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff Bay waterfront at night.");
        $("#gallery-img-2").attr("src", "https://i.imgur.com/4jAiZ93.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff Central square at night.");
        $("#gallery-img-3").attr("src", "https://i.imgur.com/LredMab.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff theatre entrance at Night.");
        $("#gallery-img-4").attr("src", "https://i.imgur.com/elYWsiQ.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff waterfront at sunset with purple and red reflecting off water.");
        $("#gallery-img-5").attr("src", "https://i.imgur.com/hadVWGe.jpg");
        $("#gallery-img-1").attr("alt", "Long exposer night shot of Traffic at cardiff motarpoint arena");
        $("#gallery-img-6").attr("src", "https://i.imgur.com/hmv36N2.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff waterfront rom close up at night.");
        $("#gallery-img-7").attr("src", "https://i.imgur.com/r8IpefH.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff Palerment from Waterfront at night.");
        $("#gallery-img-8").attr("src", "https://i.imgur.com/DO2e1t3.png");
        $("#gallery-img-1").attr("alt", "View of Cardiff central from the river taff in the night.");
        $("#gallery-img-9").attr("src", "https://i.imgur.com/cp2I8So.jpg");
        $("#gallery-img-1").attr("alt", "Arial shot of Cardiff principality arena at night");
        $("#gallery-img-10").attr("src", "https://i.imgur.com/D5r69Lk.jpg");
        $("#gallery-img-1").attr("alt", "Fans at Football match in principality stadium.");
    }

    function lightTheme() {
        $("#nav-toggle-status").text("OFF");
        $("#theme-css-link").attr("href", "assets/css/light-theme.css");
        $("#welcome-img").attr("src", "https://i.imgur.com/mnNoobI.jpg");
        $("#welcome-img").attr("alt", "View of Cardiff central from the river taff in the sunny day");
        $("#gallery-img-1").attr("src", "https://i.imgur.com/j9zelrn.jpg");
        $("#gallery-img-1").attr("alt", "Cardiff Bay with blue sky in background and buildings reflecting on water.");
        $("#gallery-img-2").attr("src", "https://i.imgur.com/5fAL56I.jpg");
        $("#gallery-img-3").attr("alt", "Cardiff central square with crowds walking and sunny weather.");
        $("#gallery-img-3").attr("src", "https://i.imgur.com/cxRKNdc.jpg");
        $("#gallery-img-3").attr("alt", "Cardiff bay theatre with reflection of sun on front entrance.");
        $("#gallery-img-4").attr("src", "https://i.imgur.com/fqnJWyb.jpg");
        $("#gallery-img-4").attr("alt", "Arial view of cardiff princapality stadium and river taff on sunny day.");
        $("#gallery-img-5").attr("src", "https://i.imgur.com/DO7sIhp.jpg");
        $("#gallery-img-5").attr("alt", "Cardiff Castle with stocks on castle grounds.");
        $("#gallery-img-6").attr("src", "https://i.imgur.com/6V7DXPz.jpg");
        $("#gallery-img-6").attr("alt", "Two white swans on water.");
        $("#gallery-img-7").attr("src", "https://i.imgur.com/GNBy6tk.jpg");
        $("#gallery-img-7").attr("alt", "Stone carved panther on wall.");
        $("#gallery-img-8").attr("src", "https://i.imgur.com/BKODw34.jpg");
        $("#gallery-img-8").attr("alt", "Cardiff Castle on cloudy day.");
        $("#gallery-img-9").attr("src", "https://i.imgur.com/DPhy0OA.png");
        $("#gallery-img-9").attr("alt", "Bute park gardens with Cardiff castle peaking over the trees on sunny day.");
        $("#gallery-img-10").attr("src", "https://i.imgur.com/D5r69Lk.jpg");
        $("#gallery-img-10").attr("alt", "Fans at Football match in principality stadium.");
    }

});