var requestServicesURL = "https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/services.json";

var requestServices = new XMLHttpRequest();
var services = []
var serviceActif = ""

requestServices.open('GET', requestServicesURL);

requestServices.responseType = 'json';
requestServices.send();

requestServices.onload = function() {
    services = requestServices.response;
    console.log(services)
    // presentService()
}

// function presentService() {
//     const nomService1 = document.getElementById('nom-service-1')
//     nomService1.innerText = services[0]["nomService"]

//     const descriptionService1 = document.getElementById('description-service-1')
//     descriptionService1.innerText = services[0]['descriptionService']


//     const nomService2 = document.getElementById('nom-service-2')
//     nomService2.innerText = services[1]["nomService"]

//     const descriptionService2 = document.getElementById('description-service-2')
//     descriptionService2.innerText = services[1]['descriptionService']


//     const nomService3 = document.getElementById('nom-service-3')
//     nomService3.innerText = services[2]["nomService"]

//     const descriptionService3 = document.getElementById('description-service-3')
//     descriptionService3.innerText = services[2]['descriptionService']
// }


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
                numService = 0
                break;
            case 'conseil' :
                numService = 1
                break
            default :
                numService = 2
        }
        h3.innerText = services[numService]["nomService"]
        p.innerText = services[numService]["descriptionService"]["fr"]

        divExplication.append(h3)
        divExplication.append(p)
    } else {
        serviceActif = ""
        divExplication.removeChild(h3)
        divExplication.removeChild(p)
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