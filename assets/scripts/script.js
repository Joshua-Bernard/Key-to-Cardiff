$(document).ready(function () {
    $(".suggestions").hide();
});
// -------------------- Credit Key: 1. Start --------------------
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
// -------------------- Credit Key: 1. End -------------------- 
function key() {
    if ($("#location-button1").hasClass("key-icon-active") && $("#time-button1").hasClass("key-icon-active")) {
        $(".suggestions").hide();
        $("#c-center-day").show();
    } else if ($("#location-button1").hasClass("key-icon-active") && $("#time-button2").hasClass("key-icon-active")) {
        $(".suggestions").hide();
        $("#c-center-night").show();
    } else if ($("#location-button2").hasClass("key-icon-active") && $("#time-button1").hasClass("key-icon-active")) {
        $(".suggestions").hide();
        $("#c-bay-day").show();
    } else if ($("#location-button2").hasClass("key-icon-active") && $("#time-button2").hasClass("key-icon-active")) {
        $(".suggestions").hide();
        $("#c-bay-night").show();
    }
}
// ----------Adding  function to buttons to show which is active 

// Location buttons
$("#location-button1").click(function () {
    $(this).addClass("key-icon-active");
    $("#location-button2").removeClass("key-icon-active");
    key();
});

$("#location-button2").click(function () {
    $(this).addClass("key-icon-active");
    $("#location-button1").removeClass("key-icon-active");
    key();
});
// Time buttons
$("#time-button1").click(function () {
    $(this).addClass("key-icon-active");
    $("#time-button2").removeClass("key-icon-active");
    key();
});

$("#time-button2").click(function () {
    $(this).addClass("key-icon-active");
    $("#time-button1").removeClass("key-icon-active");
    key();
});

// Key buttons for Cardiff Center Day

$("#key-button1").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button2").removeClass("key-icon-active");
    $("#key-button3").removeClass("key-icon-active");
});

$("#key-button2").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button1").removeClass("key-icon-active");
    $("#key-button3").removeClass("key-icon-active");
});

$("#key-button3").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button1").removeClass("key-icon-active");
    $("#key-button2").removeClass("key-icon-active");
});

// Key buttons for Cardiff Center Night

$("#key-button4").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button5").removeClass("key-icon-active");

});

$("#key-button5").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button4").removeClass("key-icon-active");

});

// Key buttons for Cardiff Bay Day

$("#key-button6").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button7").removeClass("key-icon-active");

});

$("#key-button7").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button6").removeClass("key-icon-active");

});
// Key buttons for Cardiff Bay Night
$("#key-button8").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button9").removeClass("key-icon-active");

});

$("#key-button9").click(function () {
    $(this).addClass("key-icon-active");
    $("#key-button8").removeClass("key-icon-active");

});
