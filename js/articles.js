// Variables globales
var articles = []
var langueActif = "fr"

// Désactivation de lien possédant l'id "page-actuel", cela empêche l'utilisateur d'ouvrir la page sur laquelle il se trouve
document.getElementById('page-actuel').removeAttribute('href')

// Partie exécuté au lancement de la page permettant de récupérer les données JSON stockées sur GitHub et de les convertir en JS
var requestArticlesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/articles.json';

var requestArticles = new XMLHttpRequest();

requestArticles.open('GET', requestArticlesURL);

requestArticles.responseType = 'json';
requestArticles.send();

requestArticles.onload = function() {
    articles = requestArticles.response;
    presentArticle() // Présentation des articles
}

// Fonction affichant les articles du blog.html
function presentArticle() {
    const main = document.getElementById('main')
    const hArticle = document.createElement('h1')
    hArticle.id = "titleArticles"

    // On vérifie si il y a des articles à afficher
    if (articles.length == 0) {
        hArticle.innerText = "Désolé, aucun article n'est actuellement disponible"
    } else {
        hArticle.innerText = "Nos articles"
        addArticles(document.getElementById('nosArticles'))
    }
    main.prepend(hArticle)
}


// Fonction ajoutant la totalité des articles dans l'élément html passé en paramètre danz la langue actif
function addArticles(divArticle) {
    console.log(articles.length)
    for (let i=1; i<articles.length; i++) {
        const article = document.createElement('div')
        article.className = "divArticleBlog"

        const auteur = document.createElement('h5')
        auteur.className = "auteurArticleBlog"
        auteur.innerText = articles[i]["auteur"] + ", " + articles[i]["date"]

        const commentaire = document.createElement('p')
        commentaire.className = "commentaireArticleBlog"
        commentaire.innerText = articles[i]["commentaire"][langueActif]

        article.append(auteur)
        article.append(commentaire)
        addcommentaire(article)
        divArticle.append(article)
    }

}

// Fonction ajoutant une partie commentaire à chaque élément html passé en paramètres
function addcommentaire(divCommentaire) {
    const ajoutCommentaire = document.createElement('form')
    ajoutCommentaire.className = "AjoutCommentaire"

    const Nom = document.createElement('input')
    Nom.placeholder = "Nom"
    Nom.className = "Nom"

    const commentaire = document.createElement('textarea')
    commentaire.placeholder = "Commentaire"
    commentaire.className = "Commentaire"

    const btnenvoye = document.createElement('button')
    btnenvoye.innerText = "Envoyer"
    btnenvoye.className = "envoye"

    ajoutCommentaire.append(Nom)
    ajoutCommentaire.append(commentaire)
    ajoutCommentaire.append(btnenvoye)
    divCommentaire.append(ajoutCommentaire)
}

// Fonction permettant de changer de langue
function changeLangueArticle(langue) {
    langueActif = langue
    document.getElementById('titleArticles').innerText = articles[0]["titreArticle"][langueActif] // Traduction du titre bu blog avec la langue sélectionnée
    const arr = document.getElementsByClassName('commentaireArticleBlog') // Tableau possédant les éléments html contenant les descriptions des solutions

    //Cette boucle tourne en fonction du nombre d'article et traduit les desciptions de chaque article dans la langue selectionnée
    for (let i=0; i<arr.length;i++) {
        arr[i].innerText = articles[i+1]["commentaire"][langueActif]
    }
}

// Evènement correspondant au click sur le drapeau français
document.getElementById('BtnFr').addEventListener(
    'click',
    // Traduction en français des services grâce à la fonction changeLangueArticle()
    function() {
        changeLangueArticle('fr')
    }
)

// Evènement correspondant au click sur le drapeau anglais
document.getElementById('BtnAng').addEventListener(
    'click',
    // Traduction en anglais des services grâce à la fonction changeLangueArticle()
    function() {
        changeLangueArticle('en')
    }
)

// Evènement correspondant au click sur le drapeau espagnol
document.getElementById('BtnEsp').addEventListener(
    'click',
    // Traduction en espagnol des services grâce à la fonction changeLangueArticle()
    function() {
        changeLangueArticle('es')
    }
)