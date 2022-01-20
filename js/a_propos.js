var requestProposURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/a_propos.json';

var requestPropos = new XMLHttpRequest();
var propos = []
var langueActif = "fr"

requestPropos.open('GET', requestProposURL);

requestPropos.responseType = 'json';
requestPropos.send();

requestPropos.onload = function() {
    propos = requestPropos.response;
    console.log(propos)
    putTexte()
}

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