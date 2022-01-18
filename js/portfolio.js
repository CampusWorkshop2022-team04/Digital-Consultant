var requestPortfolioURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/portfolio.json';

var requestPortfolio = new XMLHttpRequest();
var solutions = []

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

    for (let i=0; i<pf.length; i++) {
        addRex(pf[i], main)
    }
}

function addRex(rex, divPortfolio) {
    const divDocument = document.createElement('div')
    divDocument.className = 'document'

    const h2 = document.createElement('h2')
    h2.innerText = rex["realisation"]

    const divRow = document.createElement('div')
    divRow.className = "row"

    const img = document.createElement('img')
    img.src = rex["URLImage"]

    const p = document.createElement('p')
    p.innerText = rex["descriptif"]

    divRow.append(img)
    divRow.append(p)

    divDocument.append(h2)
    divDocument.append(divRow)

    divPortfolio.append(divDocument)
}