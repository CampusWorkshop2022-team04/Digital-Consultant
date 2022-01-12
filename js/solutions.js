var requestSolutionsURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/solutions.json?token=GHSAT0AAAAAABQP6BDBPLEBL75BRYFJTCZKYO6WF7Q';

var requestSolutions = new XMLHttpRequest();
var solutions = []

requestSolutions.open('GET', requestSolutionsURL);

requestSolutions.responseType = 'json';
requestSolutions.send();

requestSolutions.onload = function() {
    solutions = requestSolutions.response;
    console.log(solutions)
}