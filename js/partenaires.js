// Variables globales
var partenaires = []

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestPartenairesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/partenaires.json';

var requestPartenaires = new XMLHttpRequest();


requestPartenaires.open('GET', requestPartenairesURL);

requestPartenaires.responseType = 'json';
requestPartenaires.send();

requestPartenaires.onload = function() {
    partenaires = requestPartenaires.response;
    afficherNombrePartenaire()
    presentPartenaire()
}

// Fonction affichant le nombre de partenaires de Digital Consultant sur la page index.html
function afficherNombrePartenaire() {
    const hNbPartenaires = document.getElementById('nbPartenaires')
    hNbPartenaires.innerText = partenaires.length
}

// Fonction présentant les différents partenaires grâce a un bandeau défilant
function presentPartenaire() {
    const ul = document.getElementById('partenaires')

    for (let i=0; i<partenaires.length; i++) {
        addPartenaire(partenaires[i], ul)
    }
}

// Fonction ajoutant le partenaire en paramètre (part) dans l'élément html en paramètre
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