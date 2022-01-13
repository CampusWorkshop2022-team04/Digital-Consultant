var requestDocumentsLegauxURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/documentsLegaux.json';

var requestDocumentsLegaux = new XMLHttpRequest();
var documentsLegaux = []

requestDocumentsLegaux.open('GET', requestDocumentsLegauxURL);

requestDocumentsLegaux.responseType = 'json';
requestDocumentsLegaux.send();

requestDocumentsLegaux.onload = function() {
    documentsLegaux = requestDocumentsLegaux.response;
}

// function presentDocumentsLegaux() {
//     const divBoutonDocumentLegaux = document.getElementById('divBoutonDocumentsLegaux')
//     for (let i = 0; i < documentsLegaux.length; i++) {
//         const key = Object.keys(documentsLegaux[i])[0]
//         const boutonDoument = document.createElement('button')
//         boutonDoument.id = key
//         switch (key) {
//             case 'mentionsLegales' :
//                 boutonDoument.innerText = "Mentions Légales"
//                 break;
//             case 'CGU' :
//                 boutonDoument.innerText = "Conditions Générales d'Utilisation";
//                 break;
//             default :
//                 boutonDoument.innerText = key;
//                 break;
//         }

//         divBoutonDocumentLegaux.append(boutonDoument)
//     }
// }


function showMentionsLegals() {
    const pDocumentLegaux = document.getElementById('pDocumentLegaux')
    pDocumentLegaux.innerText = documentsLegaux['mentionsLegales']
}

function showCGU() {
    const pDocumentLegaux = document.getElementById('pDocumentLegaux')
    pDocumentLegaux.innerText = documentsLegaux['CGU']
}

function showRGPD() {
    const pDocumentLegaux = document.getElementById('pDocumentLegaux')
    pDocumentLegaux.innerText = documentsLegaux['RGPD']
}

function showTitleDocument(titleDocument) {
    const divDocumentsLegaux = document.getElementById('divDocumentsLegaux')
    // const hTitleDocument = document.createElement('h4')
    var hTitleDocument = document.getElementById('titleDocument')
    if (hTitleDocument == null) {
        hTitleDocument = document.createElement('h4')
        hTitleDocument.id = 'titleDocument'
    }
    hTitleDocument.innerText = titleDocument
    divDocumentsLegaux.prepend(hTitleDocument)
}


document.getElementById('mentionsLegales').addEventListener(
    'click',
    function() {
        showTitleDocument('Mentions Légales')
        showMentionsLegals()
    }
)

document.getElementById('CGU').addEventListener(
    'click',
    function() {
        showTitleDocument('CGU')
        showCGU()
    }
)

document.getElementById('RGPD').addEventListener(
    'click',
    function() {
        showTitleDocument('RGPD')
        showRGPD()
    }
)