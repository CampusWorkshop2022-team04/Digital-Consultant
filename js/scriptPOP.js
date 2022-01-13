var btnPopup = document.getElementById('btngerer');
var overlay = document.getElementById('overlay');
var btnclose = document.getElementById('btnclose');
var btnautoriser = document.getElementById('btnautoriser');
var textecookies = document.getElementById('textecookies');

btngerer.addEventListener('click', openModal);
btnclose.addEventListener('click', closepopup);
btnautoriser.addEventListener('click', closetexte);

function openModal(){
    overlay.style.display = 'block'; 
    textecookies.style.display ='none';
}

function closepopup(){
    overlay.style.display = 'none'; 
}

function closetexte(){
    textecookies.style.display ='none';
}