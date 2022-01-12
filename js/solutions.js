var requestSolutionsURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/solutions.json';

var requestSolutions = new XMLHttpRequest();
var solutions = []

requestSolutions.open('GET', requestSolutionsURL);

requestSolutions.responseType = 'json';
requestSolutions.send();

requestSolutions.onload = function() {
    solutions = requestSolutions.response;
    console.log(solutions)
}