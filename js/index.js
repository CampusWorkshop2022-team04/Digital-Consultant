// Variables globales
var index = []
var langueActif = "fr"

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestIndexURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/index.json';

var requestIndex = new XMLHttpRequest();

requestIndex.open('GET', requestIndexURL);

requestIndex.responseType = 'json';
requestIndex.send();

requestIndex.onload = function() {
    index = requestIndex.response;
    putTexte() // Affichage du texte au lancement de la page
}

// Fonction affichant les textes contenues dans la page index.html dans la langue actif
function putTexte() {
    const titreQuiSommesNous = document.getElementById('titreQsn')
    titreQuiSommesNous.innerText = index["Qui sommes nous"][langueActif]

    const texteQuiSommesNous = document.getElementById('texteQsn')
    texteQuiSommesNous.innerText = index["Qui sommes nous texte"][langueActif]

    const titreAPropos = document.getElementById('titre_Apn')
    titreAPropos.innerText = index["A propos de nous"][langueActif]

    const texteAPropos = document.getElementById('texteApn')
    texteAPropos.innerText = index["A propos de nous texte"][langueActif]

    const textePart = document.getElementById('texteP')
    textePart.innerText = index["Partenaire"][langueActif]
}

// Fonction permettant de changer la langue du contenu de la page index.html
function changeLangueIndex(lang) {
    langueActif = lang // Changement de la langue actif
    putTexte() // Appel de la fonction putTexte() 

}

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueIndex()
    function() {
        changeLangueIndex('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueIndex()
    function() {
        changeLangueIndex('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueIndex()
    function() {
        changeLangueIndex('es')
    }
)