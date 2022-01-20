// Variables globales
var services = []
var serviceActif = ""
var numService = 0
var langueActif = "fr"

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestServicesURL = "https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/services.json";

var requestServices = new XMLHttpRequest();


requestServices.open('GET', requestServicesURL);

requestServices.responseType = 'json';
requestServices.send();

requestServices.onload = function() {
    services = requestServices.response;
    document.getElementById('titreServ').innerText = services[0]["titreService"][langueActif] // Affichage du titre des services dans la langue actif
    presentService() // Présentation des services
}

// Fonction présentant les 3 services propsés par Digital Consultant dans la langue actif
function presentService() {
    var arrTitleService = document.getElementsByClassName('title_text')

    for (let i=0; i<arrTitleService.length; i++) {
        arrTitleService[i].innerHTML = services[i+1]["nomService"][langueActif]
    }
}

// Fonction expliquant le service cliqué par l'utilisateur dans la langue actif
function expliquerService(service) {
    const divExplication = document.getElementById('explicationService')
    var h3 = ""
    var p = ""
    // On teste si il y a déja une explication d'affiché
    if (serviceActif=="") {
        // Si aucune explication alors on crée les éléments
        h3 = document.createElement('h3')
        h3.className = "titreSolSer"
        p = document.createElement('p')
        p.className = "descriptifSolSer"
    } else {
        // Si explication alors on récupère les éléments
        h3 = divExplication.children[0]
        p = divExplication.children[1]
    }
    // Une fois les éléments stockés dans les variables globales
    // On teste si le service cliqué est différent de celui actif
    if (serviceActif!=service) {
        // Service différent alors on modifie le service actif et on affiche l'explication du service
        serviceActif = service
        
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
        // Service identique alors on ne sélectionne aucun service spécifique et on supprime l'explication
        serviceActif = ""
        divExplication.removeChild(h3)
        divExplication.removeChild(p)
    }
}

// Fonction permettant de changer la langue de la partie service
function changeLangueServ(lang) {
    langueActif = lang // Changement de la langue actif
    document.getElementById('titreServ').innerText = services[0]["titreService"][langueActif] // Traduction du titre des services avec la langue sélectionnée
    presentService() //Appel de la fonction presentService() pour traduire les services 
    // On teste si un service est en cours d'explication pour le traduire 
    if (serviceActif!="") {
        const divExplication = document.getElementById('explicationService')
        divExplication.children[0].innerText = services[numService]["nomService"][langueActif]
        divExplication.children[1].innerText = services[numService]["descriptionService"][langueActif]
    }
    
}


// Evènement correspondant au click sur le service d'audit
document.getElementById('service1').addEventListener(
    'click',
    // Affiche de l'explication du service d'audit avec la fonction expliquerService()
    function () {
        expliquerService('audit')
    }
)

// Evènement correspondant au click sur le service de conseil
document.getElementById('service2').addEventListener(
    'click',
    // Affiche de l'explication du service de conseil avec la fonction expliquerService()
    function () {
        expliquerService('conseil')
    }
)

// Evènement correspondant au click sur le service de conception
document.getElementById('service3').addEventListener(
    // Affiche de l'explication du service de conception avec la fonction expliquerService()
    'click',
    function () {
        expliquerService('conception')
    }
)

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueServ()
    function() {
        changeLangueServ('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueServ()
    function() {
        changeLangueServ('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueServ()
    function() {
        changeLangueServ('es')
    }
)