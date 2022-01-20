var requestPartenairesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/partenaires.json';

var requestPartenaires = new XMLHttpRequest();
var partenaires = []

requestPartenaires.open('GET', requestPartenairesURL);

requestPartenaires.responseType = 'json';
requestPartenaires.send();

requestPartenaires.onload = function() {
    var partenaires = requestPartenaires.response;
    afficherNombrePartenaire(partenaires.length)
    presentPartenaire(partenaires)
}


function afficherNombrePartenaire(nombrePartenaire) {
    const hNbPartenaires = document.getElementById('nbPartenaires')
    hNbPartenaires.innerText = nombrePartenaire
}

function presentPartenaire(arrPartenaire) {
    const ul = document.getElementById('partenaires')

    for (let i=0; i<arrPartenaire.length; i++) {
        addPartenaire(arrPartenaire[i], ul)
    }
}

function addPartenaire(part, ulPart) {
    const li = document.createElement('li')
    li.className = "partenaires"

    const img = document.createElement('img')
    img.className = 'logo'
    img.src = part["logoURL"]
    img.alt = "Logo de " + part["nomPartenaire"]

    const p = document.createElement('p')
    p.innerText = part["nomPartenaire"]

    li.append(img)
    li.append(p)

    ulPart.prepend(li)
}