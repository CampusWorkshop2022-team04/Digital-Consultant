var requestServicesURL = "https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/services.json";

var requestServices = new XMLHttpRequest();
var services = []

requestServices.open('GET', requestServicesURL);

requestServices.responseType = 'json';
requestServices.send();

requestServices.onload = function() {
    services = requestServices.response;
    console.log(services)
    presentService()
}

function presentService() {
    const nomService1 = document.getElementById('nom-service-1')
    nomService1.innerText = services[0]["nomService"]

    const descriptionService1 = document.getElementById('description-service-1')
    descriptionService1.innerText = services[0]['descriptionService']


    const nomService2 = document.getElementById('nom-service-2')
    nomService2.innerText = services[1]["nomService"]

    const descriptionService2 = document.getElementById('description-service-2')
    descriptionService2.innerText = services[1]['descriptionService']


    const nomService3 = document.getElementById('nom-service-3')
    nomService3.innerText = services[2]["nomService"]

    const descriptionService3 = document.getElementById('description-service-3')
    descriptionService3.innerText = services[2]['descriptionService']
}