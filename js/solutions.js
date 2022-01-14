var requestSolutionsURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/solutions.json';

var requestSolutions = new XMLHttpRequest();
var solutions = []

requestSolutions.open('GET', requestSolutionsURL);

requestSolutions.responseType = 'json';
requestSolutions.send();

requestSolutions.onload = function() {
    solutions = requestSolutions.response;
    console.log(solutions)
    presentSolutions()
}


function presentSolutions()  {
    const main = document.getElementById('main')
    console.log(main)

    const title1 = document.createElement('h1')
    title1.innerText = "Nos Solutions"
    main.append(title1)


}
