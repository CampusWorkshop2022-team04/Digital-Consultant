// Variable globale
var documentsLegaux = []

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestDocumentsLegauxURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/documentsLegaux.json';

var requestDocumentsLegaux = new XMLHttpRequest();

requestDocumentsLegaux.open('GET', requestDocumentsLegauxURL);

requestDocumentsLegaux.responseType = 'json';
requestDocumentsLegaux.send();

requestDocumentsLegaux.onload = function() {
    documentsLegaux = requestDocumentsLegaux.response;
    modificationPrivatePolicy()
}

// Fonction pour remplir le privacy policy avec les éléments en JSON
function modificationPrivatePolicy() {
    const keyJSON = Object.keys(documentsLegaux)
    const keyHTML = documentsLegaux["classHTML"]
    for (let i=0; i<keyHTML.length; i++) {
        arr = document.getElementsByClassName(keyHTML[i])

        for (let j=0; j<arr.length; j++) {
            arr[j].innerText = documentsLegaux[keyJSON[i+1]]
        }
    }

}