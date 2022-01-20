document.getElementById('page-actuel').removeAttribute('href')
var requestHFURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/HF.json';

var requestHF = new XMLHttpRequest();
var hf = []
var langueActif = "fr"

requestHF.open('GET', requestHFURL);

requestHF.responseType = 'json';
requestHF.send();

requestHF.onload = function() {
    hf = requestHF.response;
    putHF()
}

function putHF() {
    btnHeader = document.getElementById('header').getElementsByClassName('bouton')
    console.log(btnHeader)
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

function changeLangueHF(lang) {
    langueActif = lang
    putHF()

}

document.getElementById('BtnFr').addEventListener(
    'click',
    function() {
        changeLangueHF('fr')
    }
)

document.getElementById('BtnAng').addEventListener(
    'click',
    function() {
        changeLangueHF('en')
    }
)

document.getElementById('BtnEsp').addEventListener(
    'click',
    function() {
        changeLangueHF('es')
    }
)