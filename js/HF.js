// Variables globales
var hf = []
var langueActif = "fr"

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestHFURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/HF.json';

var requestHF = new XMLHttpRequest();

requestHF.open('GET', requestHFURL);

requestHF.responseType = 'json';
requestHF.send();

requestHF.onload = function() {
    hf = requestHF.response;
    putHF() // Affichage du contenu des boutons du header et du footer au lancement de la page
}

// Fonction affichant le texte de chaque bouton du header et du footer dans la langue actif
function putHF() {
    btnHeader = document.getElementById('header').getElementsByClassName('bouton')
    keyHeader = Object.keys(hf["header"])

    btnFooter = document.getElementById('footer').getElementsByClassName('bouton')
    keyFooter = Object.keys(hf["footer"])

    for (let i=0; i<btnHeader.length;i++) {
        btnHeader[i].innerText = hf["header"][keyHeader[i]][langueActif]
    } 

    for (let i=0; i<btnFooter.length;i++) {
        btnFooter[i].innerText = hf["footer"][keyFooter[i]][langueActif]
    }
}

// Fonction permettant de changer la langue du contenu du header et du footer
function changeLangueHF(lang) {
    langueActif = lang // Changement de la langue actif
    putHF() // Appel de la fonction putHF()
}

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueHF()
    function() {
        changeLangueHF('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueHF()
    function() {
        changeLangueHF('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueHF()
    function() {
        changeLangueHF('es')
    }
)
