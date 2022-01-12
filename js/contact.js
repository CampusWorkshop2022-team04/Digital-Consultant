document.getElementById('page-actuel').disable = true


var requestContactURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/contact.json';

var requestContact = new XMLHttpRequest();
var contact = []

requestContact.open('GET', requestContactURL);

requestContact.responseType = 'json';
requestContact.send();

requestContact.onload = function() {
    contact = requestContact.response;
    console.log(contact)
    presentReseauxSociaux()
    presentAutreContact()
}

function presentReseauxSociaux() {
    const nousTrouver = document.getElementById('NousTrouver')

    if (contact['nombreReseauxSociaux'] != 0) {
        const titrePartie = document.createElement('h3')
        titrePartie.innerText = "Où nous trouver ?"
        nousTrouver.prepend(titrePartie)

        for (let i=0; i < contact['reseauxSociaux'].length; i++) {
            addReseauxSociaux(contact['reseauxSociaux'][i], nousTrouver)
        }
    }
}

function addReseauxSociaux(reseauSocial, divNousTrouver) {
    if (reseauSocial['lienURLReseauSocial'] != "") {
        const aLien = document.createElement('a')
        aLien.href = reseauSocial['lienURLReseauSocial']

        const imgReseauSocial = document.createElement('img')
        imgReseauSocial.src = reseauSocial["LogoReseauSocial"]
        imgReseauSocial.alt = reseauSocial["nomReseauSocial"]
        imgReseauSocial.className= "icon"

        aLien.prepend(imgReseauSocial)
        divNousTrouver.append(aLien)
    }
}


function presentAutreContact() {
    const nosContacts = document.getElementById('nos-contacts')

    if (contact['nombreAutreContact'] != 0) {
        const titrePartie = document.createElement('h3')
        titrePartie.innerText = "Nos contacts"
        nosContacts.prepend(titrePartie)

        const ulContact = document.createElement('ul')
        for (let i=0; i < contact['autreContact'].length; i++) {
            addAutreContact(contact['autreContact'][i], ulContact)
        }
        nosContacts.append(ulContact)
    }
}

function addAutreContact(autreContact, ulNosContact) {
    const liContact = document.createElement('li')
    liContact.className = "text-center mt-3"

    switch (Object.keys(autreContact)[0]) {
        case "numeroTelephone" :
            const aTelephone = document.createElement('a')
            aTelephone.href = "tel:" + autreContact["numeroTelephone"]
            aTelephone.innerText = autreContact["numeroTelephone"]
            liContact.append(aTelephone)
            break;
        case "adresseMail" :
            const aMail = document.createElement('a')
            aMail.href = "mailto:" + autreContact["adresseMail"]    
            aMail.innerText = autreContact["adresseMail"]
            liContact.append(aMail)
            break;
        default :
            liContact.innerText = autreContact["adressePostal"]
            
    }

    ulNosContact.append(liContact)
}