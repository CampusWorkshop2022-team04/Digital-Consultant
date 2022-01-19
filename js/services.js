var requestServicesURL = "https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/services.json";

var requestServices = new XMLHttpRequest();
var services = []
var serviceActif = ""
var langueActif = "fr"

requestServices.open('GET', requestServicesURL);

requestServices.responseType = 'json';
requestServices.send();

requestServices.onload = function() {
    services = requestServices.response;
    console.log(services)
    presentService(services)
}


function presentService(serv) {
    var arrTitleService = document.getElementsByClassName('title_text')

    for (let i=0; i<arrTitleService.length; i++) {
        arrTitleService[i].innerHTML = serv[i+1]["nomService"][langueActif]
    }
}


function expliquerService(service) {
    const divExplication = document.getElementById('explicationService')
    var h3 = ""
    var p = ""
    if (serviceActif=="") {
        h3 = document.createElement('h3')
        h3.className = "titreSolSer"
        p = document.createElement('p')
        p.className = "descriptifSolSer"
    } else {
        h3 = divExplication.children[0]
        p = divExplication.children[1]
    }
    if (serviceActif!=service) {
        serviceActif = service
        
        var numService = ""
        switch (service) {
            case 'audit' :
                numService = 1
                break;
            case 'conseil' :
                numService = 2
                break
            default :
                numService = 3
        }
        h3.innerText = services[numService]["nomService"][langueActif]
        p.innerText = services[numService]["descriptionService"][langueActif]

        divExplication.append(h3)
        divExplication.append(p)
    } else {
        serviceActif = ""
        divExplication.removeChild(h3)
        divExplication.removeChild(p)
    }
}


function changeLangueServ(lang) {
    langueActif = lang
    document.getElementById('titreServ').innerText = services[0]["titreService"][langueActif]
    presentService(services)
    if (serviceActif!="") {
        expliquerService(services)
    }
    
}


document.getElementById('service1').addEventListener(
    'click',
    function () {
        expliquerService('audit')
    }
)

document.getElementById('service2').addEventListener(
    'click',
    function () {
        expliquerService('conseil')
    }
)

document.getElementById('service3').addEventListener(
    'click',
    function () {
        expliquerService('conception')
    }
)

document.getElementById('BtnFr').addEventListener(
    'click',
    function() {
        changeLangueServ('fr')
    }
)

document.getElementById('BtnAng').addEventListener(
    'click',
    function() {
        changeLangueServ('en')
    }
)

document.getElementById('BtnEsp').addEventListener(
    'click',
    function() {
        changeLangueServ('es')
    }
)