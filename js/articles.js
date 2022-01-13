var requestArticlesURL = 'https://raw.githubusercontent.com/GuilhemGabrielli/-CampusWorkshop2022-Team04/main/json/articles.json';

var requestArticles = new XMLHttpRequest();
var articles = []

requestArticles.open('GET', requestArticlesURL);

requestArticles.responseType = 'json';
requestArticles.send();

requestArticles.onload = function() {
    articles = requestArticles.response;
    console.log(articles)
}


function presentArticle() {
    const divNosArticles = document.getElementById('nosArticles')
    const hArticle = document.createElement('h1')

    if (articles.length == 0) {
        hArticle.innerText = "Désolé, aucun article n'est actuellement disponible"
        divNosArticles.append(hAucunArticle)
    } else {
        hArticle.innerText = "Nos articles"
    }
}

function addArticles() {

}