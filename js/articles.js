var requestArticlesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/articles.json';

var requestArticles = new XMLHttpRequest();
var articles = []
var langueActif = "fr"

requestArticles.open('GET', requestArticlesURL);

requestArticles.responseType = 'json';
requestArticles.send();

requestArticles.onload = function() {
    articles = requestArticles.response;
    console.log(articles)
    presentArticle()
}


function presentArticle() {
    const main = document.getElementById('main')
    const hArticle = document.createElement('h1')
    hArticle.id = "titleArticles"

    if (articles.length == 0) {
        hArticle.innerText = "Désolé, aucun article n'est actuellement disponible"
    } else {
        hArticle.innerText = "Nos articles"
        addArticles(document.getElementById('nosArticles'))
    }
    main.prepend(hArticle)
}

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

function changeLangue(langue) {
    langueActif = langue
    document.getElementById('titleArticles').innerText = articles[0]["titreArticle"][langueActif]
    const arr = document.getElementsByClassName('commentaireArticleBlog')

    for (let i=0; i<arr.length;i++) {
        arr[i].innerText = articles[i+1]["commentaire"][langueActif]
    }
}

document.getElementById('BtnFr').addEventListener(
    'click',
    function() {
        changeLangue('fr')
    }
)

document.getElementById('BtnAng').addEventListener(
    'click',
    function() {
        changeLangue('en')
    }
)

document.getElementById('BtnEsp').addEventListener(
    'click',
    function() {
        changeLangue('es')
    }
)