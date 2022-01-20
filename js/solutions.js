// Variables globales
var solutions = []
var langueActif = "fr"

// Désactivation de lien possédant l'id "page-actuel", cela empêche l'utilisateur d'ouvrir la page sur laquelle il se trouve
document.getElementById('page-actuel').removeAttribute('href')

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestSolutionsURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/solutions.json';

var requestSolutions = new XMLHttpRequest();

requestSolutions.open('GET', requestSolutionsURL);

requestSolutions.responseType = 'json';
requestSolutions.send();

requestSolutions.onload = function() {
    solutions = requestSolutions.response;
    document.getElementById('titreSol').innerText = solutions[0]["titreSolution"][langueActif] // Affichage du titre des solutions dans la langue actif
    presentSolutions() // Présentation des solutions
}

// Fonction présentant les différentes solutions propsés par Digital Consultant dans la langue actif
function presentSolutions()  {
    const nosSolutions = document.getElementById('nosSolutions')

    for (let i= 1; i<solutions.length; i++) {
        addSolution(solutions[i], nosSolutions)
    }
}

// Fonction ajoutant la solution en paramètre dans l'élément html en paramètre dans la langue actif
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

// Fonction permettant de changer la langue de la partie solution
function changeLangueSol(langue) {
    langueActif = langue // Changement de la langue actif
    document.getElementById('titreSol').innerText = solutions[0]["titreSolution"][langueActif] // Traduction du titre des services avec la langue sélectionnée
    const arrNomSolution = document.getElementById('nosSolutions').getElementsByClassName('titreSolSer') // Tableau possédant les éléments html contenant les titre des solutions
    const arrDescriptionSolution = document.getElementById('nosSolutions').getElementsByClassName('descriptifSolSer') // Tableau possédant les éléments html contenant le descriptifs des solutions
    
    //Cette boucle tourne en fonction du nombre de solutions et traduit les titres et les desciptions de chaques solutions dans la langue selectionnée
    for (let i=0; i<arrDescriptionSolution.length;i++) {
        arrNomSolution[i].innerText = solutions[i+1]["nomSolution"][langue]
        arrDescriptionSolution[i].innerText = solutions[i+1]["descriptionSolution"][langue]
    }
}

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueSol()
    function() {
        changeLangueSol('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueSol()
    function() {
        changeLangueSol('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueSol()
    function() {
        changeLangueSol('es')
    }
)