var requestDocumentsLegauxURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/documentsLegaux.json';

var requestDocumentsLegaux = new XMLHttpRequest();
var documentsLegaux = []

requestDocumentsLegaux.open('GET', requestDocumentsLegauxURL);

requestDocumentsLegaux.responseType = 'json';
requestDocumentsLegaux.send();

requestDocumentsLegaux.onload = function() {
    documentsLegaux = requestDocumentsLegaux.response;
    modificationPrivatePolicy(documentsLegaux)
}

function modificationPrivatePolicy(documents) {

    const keyJSON = Object.keys(documents)
    const keyHTML = documents["classHTML"]
    for (let i=0; i<keyHTML.length; i++) {
        arr = document.getElementsByClassName(keyHTML[i])

        for (let j=0; j<arr.length; j++) {
            arr[j].innerText = documents[keyJSON[i+1]]
        }
    }

}