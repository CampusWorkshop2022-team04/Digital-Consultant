var requestSolutionsURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/solutions.json';

var requestSolutions = new XMLHttpRequest();
var solutions = []

requestSolutions.open('GET', requestSolutionsURL);

requestSolutions.responseType = 'json';
requestSolutions.send();

requestSolutions.onload = function() {
    solutions = requestSolutions.response;
    console.log(solutions)
    presentSolutions(solutions)
}


function presentSolutions(solu)  {
    const nosSolutions = document.getElementById('nosSolutions')

    for (let i= 0; i<solu.length; i++) {
        addSolution(solu[i], nosSolutions)
    }


}

function addSolution(solution, divSolutions) {
    const divSolution= document.createElement('div')
    divSolution.className = "divSolution"

    const titre = document.createElement('h3')
    titre.className = "titreSolution"
    titre.innerText = solution["nomSolution"]

    const descriptif = document.createElement('p')
    descriptif.className = "descriptifSolution"
    descriptif.innerText = solution["descriptionSolution"]["fr"]

    divSolution.append(titre)
    divSolution.append(descriptif)

    divSolutions.append(divSolution)
}