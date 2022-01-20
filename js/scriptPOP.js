// script permettant au popup d'etre dynamique
var btnPopup = document.getElementById('btngerer'); 
var overlay = document.getElementById('overlay');
var btnclose = document.getElementById('btnclose');
var btnautoriser = document.getElementById('btnautoriser');
var textecookies = document.getElementById('textecookies');

btngerer.addEventListener('click', openModal);
btnclose.addEventListener('click', closepopup);
btnautoriser.addEventListener('click', closetexte);
 

/** Fonction permettant d'ouvrir la popup grace a EventListener  */
function openModal(){
    overlay.style.display = 'block'; 
    textecookies.style.display ='none';
}

/** Fonction permettant de fermer la popup grace a EventListener et l'icone "croix" */
function closepopup(){
    overlay.style.display = 'none'; 
}

 /** Fonction permettant de faire disparaitre le texte lorsqu'on ouvre la popup  */
function closetexte(){
    textecookies.style.display ='none';
}
