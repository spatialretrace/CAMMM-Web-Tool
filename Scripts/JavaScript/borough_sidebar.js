var boroughQueryProps;


function openBoroughSidebar(boroughQueries) {

    boroughQueryProps = boroughQueries;
    console.log("Borough Query properties from sidebar js", boroughQueryProps);

    var sidebarDiv = document.getElementById("myBoroughSidebar");

    sidebarDiv.style.width = "300px";
    sidebarDiv.style.padding = "20px";
    sidebarDiv.style.color = "#000000";
    document.getElementById("map").style.marginRight = "300px";
    document.getElementById("borough-query-name").style.color = "#000000";

    // Display Borough Info Here
    var boroughInfoHTML = "<p>Borough Name</p><h2 id=\"borough-name\">" + boroughQueryProps.NOM + "</h2>" +
        "<p>Area: <strong>" + boroughQueryProps.AIRE.toFixed(2) + " sq.m. </strong><br>" +
        // "Population in thousands: <strong>" + boroughQueryProps.PopulationInThousands + "</strong><br>" +
        "Number of Hubs: <strong>" + boroughQueryProps.NumOfHubs + "</strong><br>" +
        "Number of Clusters: <strong>" + boroughQueryProps.NumOfClusters + "</strong><br>" + "</p>";
    document.getElementById("borough-info").innerHTML += boroughInfoHTML;

};

function closeBoroughSidebar() {

    // Hide borough query dropdown at closed sidebar
    // document.getElementById("borough-query-dropdown").style.display = "none";

    zoomOutBorough();
    var sidebarDiv = document.getElementById("myBoroughSidebar");

    sidebarDiv.style.color = "#ffffff";
    sidebarDiv.style.width = "0";
    sidebarDiv.style.padding = "0";

    document.getElementById("main").style.marginRight = "0";
    document.getElementById("borough-info").innerHTML = "";
    document.getElementById("borough-query-name").innerHTML = "";

    setTimeout(hideSelectedBorough, 100);
    setTimeout(showBoroughs, 100);
}

function zoomOutBorough() {

    console.log("Closing Borough Sidebar!!!");

    map.flyTo({
        'center': boroughCenter,
        'zoom': 10.44, 'pitch': 0,
        // 'bearing': 90,
        'speed': 0.2,
        'curve': 1,
        'duration': 2000,
        'essential': true,
        'easing': function (t) {
            return t;
        }
    });
}