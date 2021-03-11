
/* -------------------- Google Maps API -------------------- */

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.484616839789784, lng: -3.1730485280668694 },
        zoom: 12,
    });

    // Array for active markers
    var activeMarkers = [];

    // Add info windows for markers.

    var infoWindow = new google.maps.InfoWindow();

    // Add marker function

    function addMarker(property) {
        var marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        // Markers that are active are pushed to an array named activeMarkers.

        activeMarkers.push(marker);

        // On click of a marker: Close current info windows and open the current marker with content included.
        marker.addListener("click", function () {
            infoWindow.close();
            infoWindow.setContent(property.content);
            infoWindow.open(map, marker);
        });

    }//function add marker ends here

    // Clears all active markers
    function clearMarkers() {
        for (let i = 0; i < activeMarkers.length; i++) {
            activeMarkers[i].setMap(null);
        }
        activeMarkers = [];
    }

    // Button click functions to show markers
    $("#key-button1").on("click", function () {
        clearMarkers();
        showMarkers(cCenterDayCafes);
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(14);
    });
    $("#key-button2").on("click", function () {
        clearMarkers();
        showMarkers(cCenterDayAttractions);
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(15);
    });
    $("#key-button3").on("click", function () {
        clearMarkers();
        showMarkers(cCenterDayActivities);
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(13);
    });
    $("#key-button4").on("click", function () {
        clearMarkers();
        showMarkers(cCenterNightRestarants);
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(15);
    });
    $("#key-button5").on("click", function () {
        clearMarkers();
        showMarkers(cCenterNightBars);
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(15);
    });
    $("#key-button6").on("click", function () {
        clearMarkers();
        showMarkers(cBayDayCafes);
        map.setCenter({ lat: 51.45436859069253, lng: -3.1693038766866364 });
        map.setZoom(14);
    });
    $("#key-button7").on("click", function () {
        clearMarkers();
        showMarkers(cBayDayActivitesAttractions);
        map.setCenter({ lat: 51.45436859069253, lng: -3.1693038766866364 });
        map.setZoom(14);
    });
    $("#key-button8").on("click", function () {
        clearMarkers();
        showMarkers(cBayNightRestaurants);
        map.setCenter({ lat: 51.45436859069253, lng: -3.1693038766866364 });
        map.setZoom(14);
    });
    $("#key-button9").on("click", function () {
        clearMarkers();
        showMarkers(cBayNightBars);
        map.setCenter({ lat: 51.45436859069253, lng: -3.1693038766866364 });
        map.setZoom(14);
    });

    // Button click function to center map on location options
    $("#location-button1").on("click", function () {
        map.setCenter({ lat: 51.484616839789784, lng: -3.1730485280668694 });
        map.setZoom(13);
    })
    $("#location-button2").on("click", function () {
        map.setCenter({ lat: 51.45436859069253, lng: -3.1693038766866364 });
        map.setZoom(14.5);
    })

    // function to show markers on the map
    function showMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
    }

    $(".suggestions").hide();
    $(".suggestions-header").hide();

    function key() {
        if ($("#location-button1").hasClass("key-icon-active") && $("#time-button1").hasClass("key-icon-active")) {
            $(".suggestions").hide();
            $("#c-center-day").show();
            $(".suggestions-header").show();
            clearMarkers();
            $(".result-icon").removeClass("key-icon-active");
        } else if ($("#location-button1").hasClass("key-icon-active") && $("#time-button2").hasClass("key-icon-active")) {
            $(".suggestions").hide();
            $("#c-center-night").show();
            $(".suggestions-header").show();
            clearMarkers();
            $(".result-icon").removeClass("key-icon-active");
        } else if ($("#location-button2").hasClass("key-icon-active") && $("#time-button1").hasClass("key-icon-active")) {
            $(".suggestions").hide();
            $("#c-bay-day").show();
            $(".suggestions-header").show();
            clearMarkers();
            $(".result-icon").removeClass("key-icon-active");
        } else if ($("#location-button2").hasClass("key-icon-active") && $("#time-button2").hasClass("key-icon-active")) {
            $(".suggestions").hide();
            $("#c-bay-night").show();
            $(".suggestions-header").show();
            clearMarkers();
            $(".result-icon").removeClass("key-icon-active");
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

    // Map Markers for Cardiff Central night Restarents:
    var cCenterNightRestarants = [
        {
            location: { lat: 51.48086142922899, lng: -3.180527302024083 },
            content: "<h4>The Potted Pig</h4> <p>Modern British cuisine with French and New York influences served in underground former bank vaults.</p>"
        },
        {
            location: { lat: 51.4806476155546, lng: -3.178660484701314 },
            content: "<h4>The Real Italian Pizza Co</h4><p>Perfect pizzas made the Italian way, together with simple family favourites and a great selection of wines and beers.</p>"
        },
        {
            location: { lat: 51.480159849358216, lng: -3.1806989633870666 },
            content: "<h4>Casanova</h4><p>Modern techniques applied to regional Italian cooking in a discreet 2-floor restaurant.</p>"
        },
        {
            location: { lat: 51.481055197005546, lng: -3.179958673759083 },
            content: "<h4>Pasture Restaurant Cardiff</h4><p>Pasture is a new Steak House & late night bar brought to you by Chef Owner Sam Elliott. Pasture restaurant is a celebration of fire-based cooking and incredible local ingredients.</p>"
        },
        {
            location: { lat: 51.48299951084088, lng: -3.1787141288772554 },
            content: "<h4>Grey</h4><p>Contemporary, light-filled eatery inside the Hilton Cardiff offering modern Welsh & British cuisine.</p>"
        },
        {
            location: { lat: 51.48513362885288, lng: -3.175524742507389 },
            content: "<h4>Park House Restaurant & Wine Bar</h4><p>Set in an oak-panelled 19th-century mansion, this elegant restaurant serves British gastro-cuisine.</p>"
        },
        {
            location: { lat: 51.480626538409474, lng: -3.1792687731888942 },
            content: "<h4>Cafe Citta</h4><p>Family-run Italian cafe/restaurant with mother serving home-made dishes from its open kitchen.</p>"
        },
        {
            location: { lat: 51.48088835586718, lng: -3.181054371342577 },
            content: "<h4>Dark By Dusty Knuckle</h4><p>Passionate about delivering top notch Neapolitan wood fired pizza! Top 10 Pizzeria in UK By The Guardian 2017 Peoples Favourite Restaurant Award Winner by The Sustainable Restaurant Association 2018</p>"
        },
        {
            location: { lat: 51.47868603480634, lng: -3.1780009596944585 },
            content: "<h4>Tŷ Madeira Restaurant</h4><p>Ty Madeira is a family run traditional Portuguese restaurant in Cardiff city centre, South Wales. We serve traditional Portuguese food made with the best ingredients using 100% authentic Portuguese recipes.</p>"
        },
        {
            location: { lat: 51.47840970887291, lng: -3.1750049954728237 },
            content: "<h4>Wahaca Cardiff</h4><p>Mexican chain diner with a lively soundtrack for small plates of market-style food and cocktails.</p>"
        },
        {
            location: { lat: 51.480947738585, lng: -3.178986842685154 },
            content: "<h4>Pho</h4><p>family-run restaurant making everything from scratch in every restaurant With a fresh & healthy menu centred around the soul-warming noodle soup, phở - Vietnam’s national dish - popular dishes also include Vietnamese curry, fried broken rice and homemade spring & summer rolls.</p>"
        },
        {
            location: { lat: 51.479785116837235, lng: -3.1744163588949963 },
            content: "<h4>Ciliegino</h4><p>Counter service Italian pastas, pizzas, salads, & plates in a no-frills space with limited seating.</p>"
        },
    ];
    // Map Markers for Cardiff Central night Bars:
    var cCenterNightBars = [
        {
            location: { lat: 51.48159552710307, lng: -3.181447293952457 },
            content: "<h4>Elevens Bar And Grill</h4><p>This brick-lined game-day spot with a contemporary, urban feel offers pub staples and a full bar.</p>"
        },
        {
            location: { lat: 51.48038025999095, lng: -3.1814241385233357 },
            content: "<h4>Bar 44 Cardiff</h4><p>The focus at Bar 44 is on impeccably sourced ingredients served simply with a modern touch.</p>"
        },
        {
            location: { lat: 51.48009037539222, lng: -3.1811260747080543 },
            content: "<h4>Tiny Rebel Cardiff</h4><p>This offbeat, brick-walled bar with themed rooms serves craft beers and ciders and creative burgers.</p>"
        },
        {
            location: { lat: 51.47818714790142, lng: -3.177525621647825 },
            content: "<h4>Yard Bar & Kitchen</h4><p>Bar/kitchen in a popular nightlife area, with an all-day menu and regular live music.</p>"
        },
        {
            location: { lat: 51.47865056509229, lng: -3.1780441852092953 },
            content: "<h4>O'Neill's St Mary Street</h4><p>Relaxed chain pub with big-screen sport, live music and Irish-influenced food and drink menus.</p>"
        },
        {
            location: { lat: 51.47841225291721, lng: -3.1772168633700866 },
            content: "<h4>Brewhouse</h4><p>Upbeat watering hole featuring a daily lineup of local bands along with pub grub & cocktails.</p>"
        },
        {
            location: { lat: 51.48078780113171, lng: -3.1758372075900247 },
            content: "<h4>Cosy Club</h4><p>Bright, spacious, open-plan pub with mismatched furniture and an international, all-day menu.</p>"
        },

        {
            location: { lat: 51.47771368869429, lng: -3.1761959429841102 },
            content: "<h4>Pitch Bar & Eatery</h4><p>Low-key, dimly-lit eatery with art-covered walls offering British standards plus cocktails & brews.</p>"
        },
        {
            location: { lat: 51.477489800615714, lng: -3.1764265553560103 },
            content: "<h4>Mocka Lounge</h4><p>Jumping bar with live music, DJs and TVs, open until late, with a menu of British/global dishes.</p>"
        },
        {
            location: { lat: 51.48293265060503, lng: -3.178007823703746 },
            content: "<h4>The Live Lounge</h4><p>Music bar with 4 performances a day from solo artists and bands from midday, with DJs until 4am.</p>"
        },
        {
            location: { lat: 51.48064754897328, lng: -3.1797743506035774 },
            content: "<h4>The Alchemist Cardiff</h4><p>Home to masters in the dark arts of molecular mixology. Step into our world of theatre served.</p>"
        },
        {
            location: { lat: 51.481054038191836, lng: -3.180300825841898 },
            content: "<h4>Gin and Juice</h4><p>By night, Gin & Juice reveals an extensive range of over 400 gins. (This collection is constantly growing.) Each Gin selected to offer a range that will amaze beginners and satisfy connoisseurs, with our expert selection.</p>"
        },
    ];
    // Map Markers for Cardiff Central day Cafes:
    var cCenterDayCafes = [
        {
            location: { lat: 51.48466908219507, lng: -3.1874565225019875 },
            content: "<h4>Summerhouse Cafe</h4><p>A Outdoor Cafe in Bute park with beautiful scenery.</p>"
        },
        {
            location: { lat: 51.48075378729523, lng: -3.179152404066342 },
            content: "<h4>Cafe Citta</h4><p>Family-run Italian cafe/restaurant with mother serving home-made dishes from its open kitchen.</p>"
        },
        {
            location: { lat: 51.4791073293184, lng: -3.1770200678583795 },
            content: "<h4>The Plan</h4><p>Award winning Indy Cafe is steeped in nostalgia. It’s situated in the heart of the 19th century Morgan Arcade, bang smack in the centre of Cardiff.</p>"
        },
        {
            location: { lat: 51.48198046383138, lng: -3.177277559521223 },
            content: "<h4>Tim Hortons</h4><p>Canadian chain selling signature premium-blend coffee, plus light fare like pastries & panini.</p>"
        },
        {
            location: { lat: 51.48218090832232, lng: -3.1743593163500394 },
            content: "<h4>Royal Coast Cafe</h4><p>Specializes in Oriental & Mediterranean Food.</p>"
        },
        {
            location: { lat: 51.487445601554846, lng: -3.188092225554725 },
            content: "<h4>The Secret Garden</h4><p>A outdoor cafe with a mystery behind it.</p>"
        },
        {
            location: { lat: 51.482167545403556, lng: -3.203391546249716 },
            content: "<h4>Hard Lines Cafe & Roastery</h4><p>A Small Batch Welsh Coffee Roastery and Cafe based in Cardiff, South Wales. Focused on delivering and brewing delicious coffee and keeping things fun throughout!</p>"
        },
        {
            location: { lat: 51.48194037484739, lng: -3.205022329198318 },
            content: "<h4>Dino's Cafe</h4><p>Italian style cafe.</p>"
        },
        {
            location: { lat: 51.48214877814286, lng: -3.2055278227367343 },
            content: "<h4>Cafe Fresco</h4><p>Old-school style breakfast cafe.</p>"
        },
        {
            location: { lat: 51.481761542575065, lng: -3.2013914721227095 },
            content: "<h4>Saffron Cafe</h4><p>Offer a variety of excellent food, prepared with the freshest and finest ingredients, to the highest standard.</p>"
        },
        {
            location: { lat: 51.481511339471695, lng: -3.1786456645810537 },
            content: "<h4>Starbucks Coffee</h4><p>For the people who want something a bit more familiar, a Starbucks in the heart of the city.</p>"
        },
        {
            location: { lat: 51.48399519966556, lng: -3.1916140521707184 },
            content: "<h4>KIN+ILK Pontcanna</h4><p>A cafe with a modern touch. serving only the finest coffees with a verity of foods on the menu.</p>"
        },
    ];
    // Map Markers for Cardiff Central day Attractions:
    var cCenterDayAttractions = [
        {
            location: { lat: 51.485001975477275, lng: -3.1851095802372638 },
            content: "<h4>Bute Park</h4><p>A rambling riverside beauty spot with an arboretum, Victorian gardens, friary ruins and a cafe.</p>"
        },
        {
            location: { lat: 51.48264938888259, lng: -3.181259128957008 },
            content: "<h4>Cardiff Castle</h4><p>Victorian Gothic fantasy built on the remains of Norman and Roman ruins, with a colourful interior.</p>"
        },
        {
            location: { lat: 51.480797753659864, lng: -3.1772214761489104 },
            content: "<h4>Museum of Cardiff</h4><p>City history given a modern makeover with interactive exhibits in a grand Old Library building.</p>"
        },
        {
            location: { lat: 51.48620645313711, lng: -3.176906748959444 },
            content: "<h4>National Museum Cardiff</h4><p>Archaeological artefacts, art and natural history, plus visiting exhibitions in a grand setting.</p>"
        },
        {
            location: { lat: 51.48260738141707, lng: -3.179762406011687 },
            content: "<h4>Wartime Shelters</h4><p>Few people realise that within the walls of the Castle are tunnels – tunnels which came into their own as air-raid shelters during the Second World War.</p>"
        },
        {
            location: { lat: 51.482125858964416, lng: -3.180635357533708 },
            content: "<h4>Cardiff Castle Museum</h4><p>Military history museum at Cardiff Castle celebrating Welsh soldiers, with interactive exhibits.</p>"
        },
        {
            location: { lat: 51.485502391816084, lng: -3.1768732077352793 },
            content: "<h4>Gorsedd Gardens</h4><p>Scenic urban green space featuring an array of blooms, a coffee shop & seasonal events.</p>"
        },
    ];
    // Map markers for Cardiff Center day activities:
    var cCenterDayActivities = [
        {
            location: { lat: 51.48132190594916, lng: -3.178425869855482 },
            content: "<h4>Escape Reality Cardiff</h4><p>Escape room, fun for all the family.</p>"
        },
        {
            location: { lat: 51.47152835489751, lng: -3.180602429012953 },
            content: "<h4>Parc Play Ltd</h4><p>Large indoor play area for the kids to enjoy with a outdoor section. Cafe and seating for parents to relax.</p>"
        },
        {
            location: { lat: 51.480797753659864, lng: -3.1772214761489104 },
            content: "<h4>Cardiff International White Water</h4><p>Water course built for the 2012 Olympics, with rafting & river-boarding on simulated surges.</p>"
        },
        {
            location: { lat: 51.46218528900932, lng: -3.1800697290129043 },
            content: "<h4>Cardiff Rowing Centre</h4><p>Cardiff's river taff rowing centre</p>"
        },
        {
            location: { lat: 51.46526212723745, lng: -3.1955868426851546 },
            content: "<h4>Ninja Warrior UK Adventure</h4><p>A ninja warrior UK inspired adventure park for all ages!</p>"
        },
        {
            location: { lat: 51.493337715480564, lng: -3.141523188549923 },
            content: "<h4>Boulders</h4><p>Climbing walls for all levels, activities and yoga/fitness classes.</p>"
        },
        {
            location: { lat: 51.49303082588456, lng: -3.1411507441287787 },
            content: "<h4>Fluidity Freerun Academy</h4><p>More than just a sports facility, Fluidity Freerun Academy is a creative space for all ages , with no gates or seperation.</p>"
        },
        {
            location: { lat: 51.4928139359775, lng: -3.1406463342154907 },
            content: "<h4>Infinity Trampoline Park Cardiff</h4><p>Trigger your creativity in a parkour-inspired, freestyle indoor trampoline park</p>"
        },
        {
            location: { lat: 51.49425270808601, lng: -3.149873949269651 },
            content: "<h4>TeamSport Go Karting Cardiff</h4><p>State-of-the-art karting track with flyover and electronic timing.</p>"
        },
    ];
    // Map markers for Cardiff Bay night Restaurants:
    var cBayNightRestaurants = [
        {
            location: { lat: 51.46362504723371, lng: -3.165881965839719 },
            content: "<h4>Las Iguanas</h4><p>Flame-grilled Latin American dishes and shared plates served in a contemporary chain dining room.</p>"
        },
        {
            location: { lat: 51.46343116467119, lng: -3.1651336296433827 },
            content: "<h4>Bayside Brasserie</h4><p>Bright, modern setting with a contemporary European menu, terrace dining and views across the bay.</p>"
        },
        {
            location: { lat: 51.463487117762945, lng: -3.1644688644398147 },
            content: "<h4>Demiros</h4><p>Restaurant with Italian/Spanish/Welsh menus in a theatrical red, mirrored setting on the waterfront.</p>"
        },
        {
            location: { lat: 51.46343719539746, lng: -3.165552123335416 },
            content: "<h4>Yakitori1</h4><p>Sushi and Japanese grill and noodle dishes in a modern space with wooden tables and an open kitchen.</p>"
        },
        {
            location: { lat: 51.46331353726853, lng: -3.1648413380042135 },
            content: "<h4>Signor Valentino</h4><p>Contemporary Italian restaurant with sun-deck, plus sweeping bays views and funky designer chairs.</p>"
        },
        {
            location: { lat: 51.46343970197767, lng: -3.164963378504479 },
            content: "<h4>Bellini's</h4><p>Family-friendly Italian restaurant with modern decor, open-plan kitchen and harbourside seating.</p>"
        },
        {
            location: { lat: 51.460388328991655, lng: -3.1671223778769395 },
            content: "<h4>The Admiral St David</h4><p>Welsh fine dining and high teas at an upscale hotel restaurant with terrace and sweeping bay views.</p>"
        },
        {
            location: { lat: 51.46384771106811, lng: -3.1656678221323937 },
            content: "<h4>JRC Global Buffet Cardiff Bay</h4><p>Sizable buffet joint with global options from Thai to American, plus live action cooking stations.</p>"
        },
        {
            location: { lat: 51.445012377799465, lng: -3.1683385420272487 },
            content: "<h4>El Puerto Restaurant</h4><p>Spacious brasserie, with a long bar and meat counter, serving European meat and fish dishes.</p>"
        },
    ];
    // Map markers for Cardiff Bay night Bars:
    var cBayNightBars = [
        {
            location: { lat: 51.463055360503176, lng: -3.165690630762336 },
            content: "<h4>The Dock</h4><p>Contemporary bar and restaurant overlooking the docks and serving British dishes.</p>"
        },
        {
            location: { lat: 51.46413512243026, lng: -3.1651073712092512 },
            content: "<h4>The Eli Jenkins</h4><p>You’ll always find a warm welcome at The Eli Jenkins in Cardiff. It’s a place where you can enjoy the day whether you fancy a few rounds, a spot of lunch or a cosy meal. Where great food and live sport lift your spirits. And where the banter flows as freely as the drinks.</p>"
        },
        {
            location: { lat: 51.46324899340944, lng: -3.165603746670832 },
            content: "<h4>Salt</h4><p>Ocean-liner decor, driftwood and comfy sofas in a bar with a simple menu and views across the bay.</p>"
        },
        {
            location: { lat: 51.46261320421371, lng: -3.166487417835644 },
            content: "<h4>The Mount Stuart - JD Wetherspoon</h4><p>Spacious chain pub featuring a contemporary industrial feel and a no music policy.</p>"
        },
        {
            location: { lat: 51.464696909460216, lng: -3.1679828000444408 },
            content: "<h4>Mischiefs Cafe Bar</h4><p>Corner cafe bar with buzzy vibe, for home-cooked hot lunches, evening drinks and weekend live music.</p>"
        },
        {
            location: { lat: 51.46367653974864, lng: -3.164716766180023 },
            content: "<h4>Cote Brasserie - Cardiff Bay</h4><p>Modern, all-day French brasserie chain, serving regional specialities and traditional classics.</p>"
        },
        {
            location: { lat: 51.460388328991655, lng: -3.1671223778769395 },
            content: "<h4>The Admiral St David</h4><p>Welsh fine dining and high teas at an upscale hotel restaurant with terrace and sweeping bay views.</p>"
        },
        {
            location: { lat: 51.45202204294315, lng: -3.1866115001777646 },
            content: "<h4>Harvester Cardiff Bay</h4><p>Simple, child-friendly chain pub/restaurant serving grilled dishes, salads, burgers and steaks.</p>"
        },
    ];
    // Map markers for Cardiff Bay day Cafes:
    var cBayDayCafes = [
        {
            location: { lat: 51.4612000747173, lng: -3.1606830201659166 },
            content: "<h4>Coffi Co. - Porth Teigr</h4><p>ur first and Flag Ship store, Coffi Co Cardiff Bay is the quirkiest Coffi Shop in Cardiff! Made from Shipping Containers, with deck chairs in the front yard and a roaring fire to keep all our awesome #COFFIHEADS nice and cosy inside, it’s a must visit on any trip to Cardiff Bay!</p>"
        },
        {
            location: { lat: 51.46456895943554, lng: -3.1657041150339817 },
            content: "<h4>Quantum Coffee Roasters</h4><p>The truth is, we love experimenting with the possibilities of coffee and this is where our belief in the connection of craftsmanship and science becomes reality. -Quantum Coffee Roasters</p>"
        },
        {
            location: { lat: 51.45915144687071, lng: -3.161314472647525 },
            content: "<h4>Lookout Cafe and Bar</h4><p>We are known for being one of the best kept secrets of Cardiff Bay. Somewhere you can unwind with stunning views that overlook the bay. Whether you are here for lunch with friends or in the evening for a delicious dinner, we’ll look after you.</p>"
        },
        {
            location: { lat: 51.46296549339385, lng: -3.1647616822532383 },
            content: "<h4>Cadwaladers</h4><p>The Cadwaladers Ice Cream story began in 1927. The Cadwalader family lived in Criccieth in Gwynedd, North Wales. There they made and sold their closely guarded secret recipe, vanilla ice cream, from the window of their Criccieth general store.</p>"
        },
        {
            location: { lat: 51.46470926449655, lng: -3.1672811178356444 },
            content: "<h4>Espresso Lab</h4><p>A unique coffee shop right on the outskirts of Cardiff bay.</p>"
        },
        {
            location: { lat: 51.46466265379561, lng: -3.167993529012953 },
            content: "<h4>Mischiefs Cafe Bar</h4><p>Corner cafe bar with buzzy vibe, for home-cooked hot lunches, evening drinks and weekend live music.</p>"
        },
        {
            location: { lat: 51.462971005017565, lng: -3.166454686683329 },
            content: "<h4>Bill's Cardiff Bay Restaurant</h4><p>Contemporary European chain dishing up separate breakfast, afternoon tea, lunch and dinner menus.</p>"
        },
        {
            location: { lat: 51.44445503049227, lng: -3.1732114578481405 },
            content: "<h4>The Galley</h4><p>Contemporary bar and restaurant overlooking the docks and serving British dishes.</p>"
        },
        {
            location: { lat: 51.46626332570138, lng: -3.1591379866833296 },
            content: "<h4>Mizzi Coffee & Sandwich Bar</h4><p>Mizzi Cardiff; ideally located for a grab & go lunch for the Cardiff Waterside business community.</p>"
        },
    ];
    // Map markers for Cardiff Bay day Activites/ Attractions:
    var cBayDayActivitesAttractions = [
        {
            location: { lat: 51.44869231044318, lng: -3.181760311463984 },
            content: "<h4>Cardiff International White Water</h4><p>Water course built for the 2012 Olympics, with rafting & river-boarding on simulated surges.</p>"
        },
        {
            location: { lat: 51.46257779649925, lng: -3.1679737582471827 },
            content: "<h4>Techniquest</h4><p>Family-friendly attraction that aims to teach people about science and motivate them to learn more.</p>"
        },
        {
            location: { lat: 51.446686220021945, lng: -3.1655488007110604 },
            content: "<h4>Cardiff Bay Barrage</h4><p>Modern harbor barrier, featuring locks & an embankment with bike paths, a playground & picnic areas.</p>"
        },
        {
            location: { lat: 51.46701843262286, lng: -3.1630903295462347 },
            content: "<h4>The Red Dragon Centre</h4><p>Leisure and entertainment centre with restaurants, a cinema, bowling alley, casino and health club.</p>"
        },
        {
            location: { lat: 51.46483839843488, lng: -3.1631824491868166 },
            content: "<h4>Wales Millennium Centre</h4><p>Major modern culture venue staging theatre, opera, ballet and music shows, with bars and dining.</p>"
        },
        {
            location: { lat: 51.46699602772389, lng: -3.163729557848141 },
            content: "<h4>Hollywood Bowl Cardiff</h4><p>Modern multi-lane bowling chain with an on-site bar/diner, plus a dedicated games area and arcade.</p>"
        },
        {
            location: { lat: 51.46144234931173, lng: -3.1618725578481413 },
            content: "<h4>Norwegian Church Arts Centre</h4><p>Former 19th-century church with a cafe, a gallery & bay views, plus regular concerts & arts events.</p>"
        },
        {
            location: { lat: 51.44445503049227, lng: -3.1732114578481405 },
            content: "<h4>The Galley</h4><p>Contemporary bar and restaurant overlooking the docks and serving British dishes.</p>"
        },
    ];
} 
