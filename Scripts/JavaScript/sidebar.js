var myJson;

function newJson(obj) {
    myJson = obj;
    console.log("Initializing new Node Json obj");
}

// var isOpened = true;

var nodeProperties, nodeCategory;


function openSidebar(nodeProps) {
    if (selectedQuery != "Select Query") {
        getSelectedQuery(selectedQuery);
    }

    // closeBoroughSidebar();
    nodeProperties = nodeProps;
    nodeCategory = assignCategory();
    console.log(nodeProperties);

    var sidebarDiv = document.getElementById("mySidebar");

    // if (isOpened) {
    // setTimeout(calMultiModality, 1200);

    sidebarDiv.style.width = "300px";
    sidebarDiv.style.padding = "20px";
    document.getElementById("mySidebar").style.color = "#000000";
    document.getElementById("map").style.marginRight = "300px";
    document.getElementById("query-name").style.color = "#000000";

    // Node Category & Type
    document.getElementById("node-category-type").innerHTML = nodeCategory + " " + nodeProperties.Type;

    // Node Name
    document.getElementById("node-name").innerHTML = "<h2>" + nodeProperties.Name + "</h2>";

    // Node Street View
    // document.getElementById("node-street-view").innerHTML = "<iframe src=\"" + nodeProperties.URL + "\">Street View</iframe>";

    //     isOpened = false;
    // }
};

function closeSidebar() {

    // Hide node query dropdown at closed sidebar
    // document.getElementById("query-dropdown").style.display = "none";

    // Show borough query dropdown at  closed node sidebar
    // document.getElementById("borough-query-dropdown").style.display = "block";

    zoomOutNode();
    hideLines();
    var sidebarDiv = document.getElementById("mySidebar");

    document.getElementById("mySidebar").style.color = "#ffffff";
    sidebarDiv.style.width = "0";
    sidebarDiv.style.padding = "0";
    // sidebarDiv.innerHTML = "";
    document.getElementById("query-name").innerHTML = "";

    // Node Category & Type
    document.getElementById("node-category-type").innerHTML = "";

    // Node Name
    document.getElementById("node-name").innerHTML = "";

    // Node Street View
    // document.getElementById("node-street-view").innerHTML = "";

    document.getElementById("main").style.marginRight = "0";

    // isOpened = true;
}

function fetchNodeProps() {
    return nodeProperties;
}