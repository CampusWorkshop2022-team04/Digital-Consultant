var requestArticlesURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/articles.json';

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
    const divNosArticles = document.getElementById('nosArticles')
    const hArticle = document.createElement('h1')

    if (articles.length == 0) {
        hArticle.innerText = "Désolé, aucun article n'est actuellement disponible"
    } else {
        hArticle.innerText = "Nos articles"
        addArticles(divNosArticles)
    }
    divNosArticles.prepend(hArticle)
}

function addArticles(divArticle) {
    console.log(articles.length)
    for (let i=0; i<articles.length; i++) {
        const article = document.createElement('div')

        const auteur = document.createElement('h5')
        auteur.innerText = articles[i]["auteur"] + " le " + articles[i]["date"]

        const commentaire = document.createElement('p')
        commentaire.innerText = articles[i]["commentaire"]

        article.append(auteur)
        article.append(commentaire)

        divArticle.append(article)
    }

}