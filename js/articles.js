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
