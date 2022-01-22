// Variables globales
var contact = []
var langueActif = "fr"

// Désactivation de lien possédant l'id "page-actuel", cela empêche l'utilisateur d'ouvrir la page sur laquelle il se trouve
document.getElementById('page-actuel').removeAttribute('href')

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestContactURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/contact.json';

var requestContact = new XMLHttpRequest();

requestContact.open('GET', requestContactURL);

requestContact.responseType = 'json';
requestContact.send();

requestContact.onload = function() {
    contact = requestContact.response;
    putForm()
    presentReseauxSociaux()
    presentAutreContact()
}

// Fonction affichant les éléments du formulaire
function putForm() {
    const titreForm = document.getElementById('titreContacter')
    console.log(titreForm)
    titreForm.innerText = contact["TitreNousContacter"][langueActif]

    const placeholderNom = document.getElementsByClassName('Nom')[0]
    placeholderNom.placeholder = contact["FormNom"][langueActif]
    
    const placeholderPrenom = document.getElementsByClassName('Prenom')[0]
    placeholderPrenom.placeholder = contact["FormPrenom"][langueActif]

    const placeholderMail = document.getElementsByClassName('Adresse')[0]
    placeholderMail.placeholder = contact["FormMail"][langueActif]

    const placeholderTexte = document.getElementById('texte')
    placeholderTexte.placeholder = contact["FormTexte"][langueActif]
}

// Fonction affichant le titre réseaux sociaux si il y en a 
function presentReseauxSociaux() {
    const nousTrouver = document.getElementById('NousTrouver')

    // On vérifie si Digital Consultant est sur des réseaux sociaux
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

// Fonction qui ajoute le réseau social passé en paramètres dans l'élément html passé en paramètre
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

// Fonction affichant le titre d'autre contact si il y en a 
function presentAutreContact() {
    const nosContacts = document.getElementById('nos-contacts')

    // On vérifie si Digital Consultant a d'autres moyens de contact
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

// Fonction qui ajoute le moyen de contact passé en paramètres dans l'élément html passé en paramètre
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

// Fonction permettant de changer la langue 
function changeLangueContact(lang) {
    langueActif = lang // Fonction permettant de changer la langue 
    putForm()
    
    // On teste si il faut traduire le titre des moyens de contact
    if (contact['nombreAutreContact'] != 0) {
        document.getElementById('titreNosContact').innerText = contact["TitreNosContacts"][langueActif]
    }
    // On teste si il faut traduire le titre des réseaux sociaux
    if (contact['nombreReseauxSociaux'] != 0) {
        document.getElementById('TitreOuNousTrouver').innerText = contact["TitreOuNousTrouver"][langueActif]
    }
}


// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueContact()
    function() {
        changeLangueContact('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueContact()
    function() {
        changeLangueContact('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueContact()
    function() {
        changeLangueContact('es')
    }
)