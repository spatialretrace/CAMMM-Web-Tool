/* This js file contains functions to display
stats at city level such as population, area,
density and available transit modes.
*/

var myCityJson = [];

function readCityJSON() {
    myCityJson = readGeoJsonObj("city_sample.geojson");
}

function loadCitySidebar() {
    console.log("City GeoJSON: ", myCityJson);

    var citySidebarDiv = document.getElementById("myCitySidebar");

    citySidebarDiv.style.width = "300px";
    citySidebarDiv.style.padding = "20px";
    document.getElementById("myCitySidebar").style.color = "#000000";
    // document.getElementById("map").style.marginRight = "300px";
    // document.getElementById("city-stats").style.color = "#000000";

    console.log("City Area is: ", myCityJson.Area_in_sq_km);
    insertCityStats();
    displayCityTransitModes();
}

function closeCitySidebar() {

    var citySidebarDiv = document.getElementById("myCitySidebar");

    document.getElementById("myCitySidebar").style.color = "#ffffff";
    citySidebarDiv.style.width = "0";
    citySidebarDiv.style.padding = "0";

    document.getElementById("main").style.marginRight = "0";

}

function insertCityStats() {
    document.getElementById("city-area").innerHTML += myCityJson.Area_in_sq_km.toString() + " sq.km.";
    document.getElementById("city-population").innerHTML += myCityJson.Population_in_mil.toString();
    document.getElementById("city-density").innerHTML += myCityJson.Density.toString() + " people/sq.km.";
}

var transitIconDictionary = [
    {
        "transitType": "Tram",
        "transitIcon": "fas fa-train-tram fa-2x"
    },
    {
        "transitType": "Metro",
        "transitIcon": "fas fa-subway fa-2x"
    },
    {
        "transitType": "Rail",
        "transitIcon": "fas fa-train fa-2x"
    },
    {
        "transitType": "Bus",
        "transitIcon": "fas fa-bus fa-2x"
    },
    {
        "transitType": "Car-Sharing",
        "transitIcon": "fas fa-car fa-2x"
    },
    {
        "transitType": "Bike-sharing",
        "transitIcon": "fas fa-bicycle fa-2x"
    },
];

function displayCityTransitModes() {
    var cityTransitDiv = document.getElementById("city-transit-modes");
    var transitModeHTML = "";

    console.log("Finding available transit modes from City GeoJSON");

    var availCityModes = [];
    for (transit in myCityJson.TransitTypesStops) {
        if (myCityJson.TransitTypesStops[transit] != 0) {
            // console.log(transit);
            availCityModes.push(transit);
        }
    }

    console.log("Available City Transit Modes are: ", availCityModes);

    //     for(transitMode in transitIconDictionary){
    // if(transitIconDictionary[transitMode].transitType)
    //     }
    //     if (transitDictionary[transitMode].isActive == true) {
    //         transitModeHTML += "<div id=\"transit-mode\">" +
    //             "<i class=\"" + transitDictionary[transitMode].transitIcons + "\"></i>" +
    //             "<div id=\"transit-mode-name\">" +
    //             "<p>" + transitDictionary[transitMode].transitName + "</p>" + "</div>" + "</div>";
    //     }
    // }
    // for (transitMode in transitDictionary) {
    //     if (transitDictionary[transitMode].isActive == false) {
    //         transitModeHTML += "<div id=\"transit-mode\">" +
    //             "<i class=\"" + transitDictionary[transitMode].transitIcons + "\" style=\"color:#d3d3d3;\"></i>" +
    //             "<div id=\"transit-mode-name\">" +
    //             "<p>" + transitDictionary[transitMode].transitName + "</p>" + "</div>" + "</div>";
    //     }
    // }

    console.log("Displaying City-level Available Transit Modes");

    cityTransitDiv.innerHTML = transitModeHTML;
}

