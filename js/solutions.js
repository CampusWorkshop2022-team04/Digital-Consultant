var requestSolutionsURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/solutions.json';

var requestSolutions = new XMLHttpRequest();
var solutions = []
var langueActif = "fr"

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

    for (let i= 1; i<solu.length; i++) {
        addSolution(solu[i], nosSolutions)
    }


}

function addSolution(solution, divSolutions) {
    const divSolution= document.createElement('div')
    divSolution.className = "divSolution"

    const titre = document.createElement('h3')
    titre.className = "titreSolSer"
    titre.innerText = solution["nomSolution"][langueActif]

    const descriptif = document.createElement('p')
    descriptif.className = "descriptifSolSer"
    descriptif.innerText = solution["descriptionSolution"][langueActif]

    divSolution.append(titre)
    divSolution.append(descriptif)

    divSolutions.append(divSolution)
}

function changeLangueSol(langue) {
    langueActif = langue
    document.getElementById('titreSol').innerText = solutions[0]["titreSolution"][langueActif]
    const arrNomSolution = document.getElementById('nosSolutions').getElementsByClassName('titreSolSer')
    const arrDescriptionSolution = document.getElementById('nosSolutions').getElementsByClassName('descriptifSolSer')
 
    for (let i=0; i<arrDescriptionSolution.length;i++) {
        arrNomSolution[i].innerText = solutions[i+1]["nomSolution"][langue]
        arrDescriptionSolution[i].innerText = solutions[i+1]["descriptionSolution"][langue]
    }
}