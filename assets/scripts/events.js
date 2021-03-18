// --------------------Event Start --------------------
var eventRequest = new XMLHttpRequest();

eventRequest.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&city=cardiff&apikey=4jkElgowNHwAgsiK47mBDSoIMyQY15JE", true);

eventRequest.onload = function () {

    var ticketMaster = JSON.parse(this.response);   // Accessing JSON data

    if (eventRequest.status >= 200 && eventRequest.status < 400) {
        console.log("Ticketmaster API loaded Successfully");// Accessing JSON data

        for (let i = 0; i < 12; i++) {
            const eventData = ticketMaster._embedded.events[i];
            const eventTitle = $(".event-name")[i];
            const venue = $(".venue")[i];
            const eventDate = $(".event-date")[i];
            const dateFinder = new Date(eventData.dates.start.localDate);
            const dateFormat = dateFinder.getDate() + "/" + (dateFinder.getMonth() + 1) + "/" + dateFinder.getFullYear();
            const eventUrl = $(".event-url")[i];

            $(eventTitle).html(eventData.name); // Sets the title of the event 
            $(eventDate).html(dateFormat); // Sets date of the event
            $(venue).html(eventData._embedded.venues[0].name); // Sets the name of the venue 
            $(eventUrl).attr("href", eventData.url); // Sets the Ticketmaster URL of the event

            // This "for" loop runs through the first 6 images of an event and sets the first image with a ratio of 16:9 and aminimum width of 1000px.
            for (let j = 0; j < 6; j++) {
                const eventGallery = eventData.images[j];
                const eventImage = $(".event-image")[i];
                if ((eventGallery.width > 1000) && (eventGallery.ratio = "16_9")) {
                    $(eventImage).attr("src", eventGallery.url);
                    break;
                } else {
                    $(eventImage).attr("src", "assets/images/event.jpg");// If there are no images that fit criteria, a default image is displayed.
                }
            } // end of for loop 
        }// end of for loop

    } else {
        console.log("Ticketmaster API load unsuccessful");
        for (let i = 0; i < 12; i++) {
            $("#event-container").children().hide(); // Hides event section to minimize on screen clutter
            $("#event-container").html("<p>Event information is currently unavailable<span class='punctiuation'>.</span> Please try again later<span class='punctiuation'>!</span></p>");
            // Displays unsuccessful load error message to the user
        }
    }
};

eventRequest.send();// Sends the request
