var requestIndexURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/index.json';

var requestIndex = new XMLHttpRequest();
var Index = []
var langueActif = "fr"

requestIndex.open('GET', requestIndexURL);

requestIndex.responseType = 'json';
requestIndex.send();

requestIndex.onload = function() {
    Index = requestIndex.response;
    console.log(index)
    presentindex()
}