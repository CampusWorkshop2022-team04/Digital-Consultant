var requestArticlesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/articles.json';

var requestArticles = new XMLHttpRequest();
var articles = []

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
    for (let i=0; i<articles.length; i++) {
        const article = document.createElement('div')
        article.className = "divArticleBlog"

        const auteur = document.createElement('h5')
        auteur.className = "auteurArticleBlog"
        auteur.innerText = articles[i]["auteur"] + " le " + articles[i]["date"]

        const commentaire = document.createElement('p')
        commentaire.className = "commentaireArticleBlog"
        commentaire.innerText = articles[i]["commentaire"]

        article.append(auteur)
        article.append(commentaire)

        divArticle.append(article)
    }

}