$("#unsuccessful-msg").hide();
$("#successful-msg").hide();

function sendMail(contactForm) {
    emailjs.send("gmail", "key-to-cardiff", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("Submittion successful.", response);
                $("#form-submit").hide(); // the submit button is hidden
                $("#successful-msg").show();
                function toggleDiv() {
                    // set timeout code was found at www.w3schools.com/jsref/met_win_settimeout.asp
                    setTimeout(function () {
                        $("#successful-msg").hide();
                    }, 5000);
                }
            },
            function (error) {
                console.log("Submittion unsuccessful", error);
                $("#form-submit").hide(); // the submit button is hidden
                $("#unsuccessful-msg").show();
                function toggleDiv() {
                    // set timeout code was found at www.w3schools.com/jsref/met_win_settimeout.asp
                    setTimeout(function () {
                        $("#unsuccessful-msg").hide();
                    }, 5000);
                }
            });
    return false;
}