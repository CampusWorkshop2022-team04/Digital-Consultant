var requestPartenairesURL = 'https://github.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/partenaires.json';

var requestPartenaires = new XMLHttpRequest();
var partenaires = []

requestPartenaires.open('GET', requestPartenairesURL);

requestPartenaires.responseType = 'json';
requestPartenaires.send();

requestPartenaires.onload = function() {
    var partenaires = requestPartenaires.response;
    console.log(partenaires)

    const imgAudit = document.getElementById('img-audit')
    imgAudit.src = partenaires[0]["logo"]
}


function obtenirNombrePartenaire() {
    return partenaires.length
}
