var requestPortfolioURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/portfolio.json';

var requestPortfolio = new XMLHttpRequest();
var solutions = []
var langueActif = "fr"

requestPortfolio.open('GET', requestPortfolioURL);

requestPortfolio.responseType = 'json';
requestPortfolio.send();

requestPortfolio.onload = function() {
    portfolio = requestPortfolio.response;
    console.log(portfolio)
    presentPortfolio(portfolio)
}

function presentPortfolio(pf) {
    const main = document.getElementById('main')

    for (let i=1; i<pf.length; i++) {
        addRex(pf[i], main)
    }
}

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

function changeLangue(langue) {
    langueActif = langue
    document.getElementById('titlePortfolio').innerText = portfolio[0]["titrePortfolio"][langueActif]
    arr = document.getElementsByClassName('pDescriptif')

    for (let i=0; i< arr.length;i++) {
        arr[i].innerText = portfolio[i+1]["descriptif"][langueActif]
    }
}


document.getElementById('BtnFr').addEventListener(
    'click',
    function() {
        changeLangue('fr')
    }
)

document.getElementById('BtnAng').addEventListener(
    'click',
    function() {
        changeLangue('en')
    }
)

document.getElementById('BtnEsp').addEventListener(
    'click',
    function() {
        changeLangue('es')
    }
)

