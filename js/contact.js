document.getElementById('page-actuel').removeAttribute('href')


var requestContactURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/contact.json';

var requestContact = new XMLHttpRequest();
var contact = []
var langueActif = "fr"

requestContact.open('GET', requestContactURL);

requestContact.responseType = 'json';
requestContact.send();

requestContact.onload = function() {
    contact = requestContact.response;
    putTexte()
    presentReseauxSociaux()
    presentAutreContact()
}

function putTexte() {
    const titreForm = document.getElementsByClassName('titre')[0]
    titreForm.innerText = contact["TitreNousContacter"][langueActif]

    const placeholderNom = document.getElementsByClassName('Nom')[0]
    placeholderNom.innerText = contact["FormNom"][langueActif]
    
    const placeholderPrenom = document.getElementsByClassName('Prenom')[0]
    placeholderPrenom.innerText = contact["FormPrenom"][langueActif]

    const placeholderMail = document.getElementsByClassName('Adresse')[0]
    placeholderMail.innerText = contact["FormMail"][langueActif]

    const placeholderTexte = document.getElementById('texte')
    placeholderTexte.innerText = contact["FormTexte"][langueActif]

}

function presentReseauxSociaux() {
    const nousTrouver = document.getElementById('NousTrouver')

    if (contact['nombreReseauxSociaux'] != 0) {
        const titrePartie = document.createElement('h3')
        titrePartie.innerText = contact["TitreOuNousTrouver"][langueActif]
        titrePartie.className = "text-center m-3"
        titrePartie.id = "TitreOuNousTrouver"
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
        titrePartie.innerText = contact["TitreNosContacts"][langueActif]
        titrePartie.className = "text-center"
        titrePartie.id = "titreNosContact"
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


function changeLangueContact(lang) {
    langueActif = lang
    putTexte()
    
    if (contact['nombreAutreContact'] != 0) {
        document.getElementById('titreNosContact').innerText = contact["TitreNosContacts"][langueActif]
    }
    if (contact['nombreReseauxSociaux'] != 0) {
        document.getElementById('TitreOuNousTrouver').innerText = contact["TitreOuNousTrouver"][langueActif]
    }
}


document.getElementById('BtnFr').addEventListener(
    'click',
    function() {
        changeLangueContact('fr')
    }
)

document.getElementById('BtnAng').addEventListener(
    'click',
    function() {
        changeLangueContact('en')
    }
)

document.getElementById('BtnEsp').addEventListener(
    'click',
    function() {
        changeLangueContact('es')
    }
)