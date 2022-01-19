var requestIndexURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/index.json';

var requestIndex = new XMLHttpRequest();
var index = []
var langueActif = "fr"

requestIndex.open('GET', requestIndexURL);

requestIndex.responseType = 'json';
requestIndex.send();

requestIndex.onload = function() {
    index = requestIndex.response;
    console.log(index)
    putTexte()
}

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

function changeLangue(lang) {
    langueActif = lang
    putTexte()

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