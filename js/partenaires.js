var requestPartenairesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/partenaires.json?token=GHSAT0AAAAAABQP6BDBLJQ4JY7DWNDEYC6CYO6WFFA';

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