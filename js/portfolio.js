// Variables globales
var solutions = []
var langueActif = "fr"

// Désactivation de lien possédant l'id "page-actuel", cela empêche l'utilisateur d'ouvrir la page sur laquelle il se trouve
document.getElementById('page-actuel').removeAttribute('href')

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestPortfolioURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/portfolio.json';

var requestPortfolio = new XMLHttpRequest();

requestPortfolio.open('GET', requestPortfolioURL);

requestPortfolio.responseType = 'json';
requestPortfolio.send();

requestPortfolio.onload = function() {
    portfolio = requestPortfolio.response;
    document.getElementById('titlePortfolio').innerText = portfolio[0]["titrePortfolio"][langueActif] // Affichage du titre portfolio dans la langue actif
    presentPortfolio() // Présentation du portfolio
}

// Fonction présentant les différentes réalisations du portfolio de Digital Consultant
function presentPortfolio() {
    const main = document.getElementById('main')

    for (let i=1; i<portfolio.length; i++) {
        addRex(portfolio[i], main)
    }
}

// Fonction ajoutant la réalisation passée en paramètres (rex) dans l'élément html en paramètre dans la langue actif
function addRex(rex, divPortfolio) {
    const divDocument = document.createElement('div')
    divDocument.className = 'document'

    const divTitre = document.createElement('div')
    divTitre.className = 'divTitreLogo'

    const h2 = document.createElement('h2')
    h2.innerText = rex["realisation"]

    const imgLogo = document.createElement('img')
    imgLogo.className= "logoClient"
    imgLogo.src = rex["logoClient"]
    imgLogo.alt = "Logo du client"

    const divRow = document.createElement('div')
    divRow.className = "row"

    const imgReal = document.createElement('img')
    imgReal.src = rex["URLImage"]
    imgReal.alt = "Illustration de la réalisation effectué"

    const p = document.createElement('p')
    p.className = "pDescriptif"
    p.innerText = rex["descriptif"][langueActif]

    divTitre.append(h2)
    divTitre.append(imgLogo)

    divRow.append(imgReal)
    divRow.append(p)

    divDocument.append(divTitre)
    divDocument.append(divRow)

    divPortfolio.append(divDocument)
}

// Fonction permettant de changer la langue 
function changeLanguePortfolio(langue) {
    langueActif = langue // Changement de la langue actif
    document.getElementById('titlePortfolio').innerText = portfolio[0]["titrePortfolio"][langueActif] // Traduction du titre du portfolio avec la langue sélectionnée
    arr = document.getElementsByClassName('pDescriptif') // Tableau possédant les éléments html contenant le descriptif de chaque réalisation 

    // Cette bouvle tourne en fonction du nombre de réalisations et traduit les descriptifs dans la langue sélectionné
    for (let i=0; i< arr.length;i++) {
        arr[i].innerText = portfolio[i+1]["descriptif"][langueActif]
    }
}


// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLanguePortfolio()
    function() {
        changeLanguePortfolio('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLanguePortfolio()
    function() {
        changeLanguePortfolio('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLanguePortfolio()
    function() {
        changeLanguePortfolio('es')
    }
)

