// Variables globales
var propos = []
var langueActif = "fr"

// Désactivation de lien possédant l'id "page-actuel", cela empêche l'utilisateur d'ouvrir la page sur laquelle il se trouve
document.getElementById('page-actuel').removeAttribute('href')

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestProposURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/a_propos.json';

var requestPropos = new XMLHttpRequest();

requestPropos.open('GET', requestProposURL);

requestPropos.responseType = 'json';
requestPropos.send();

requestPropos.onload = function() {
    propos = requestPropos.response;
    putTexte()
}

// Fonction affichant les textes contenues dans la page propos.html dans la langue actif
function putTexte() {
    const titreHistoire = document.getElementById('NotreHistoire')
    titreHistoire.innerText = propos["titreHistoire"][langueActif]

    const titrePropos = document.getElementById('aPropos')
    titrePropos.innerText = propos["AProposTitre"][langueActif]

    const texteAPropos = document.getElementById('textePropos')
    texteAPropos.innerText = propos["A propos de nous texte"][langueActif]

    const titreImplantation = document.getElementById('titreImplantation')
    titreImplantation.innerText = propos["titreImplantation"][langueActif]

    const legende1 = document.getElementById('legende1')
    legende1.innerText = propos["legende1"][langueActif]

    const legende2 = document.getElementById('legende2')
    legende2.innerText = propos["legende2"][langueActif]
}

// Fonction permettant de changer la langue du contenu de la page index.html
function changeLanguePropos(lang) {
    langueActif = lang // Changement de la langue actif
    putTexte() // Appel de la fonction putTexte() 
}

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLanguePropos()
    function() {
        changeLanguePropos('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLanguePropos()
    function() {
        changeLanguePropos('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLanguePropos()
    function() {
        changeLanguePropos('es')
    }
)