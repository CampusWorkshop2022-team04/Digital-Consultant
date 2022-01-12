var requestArticlesURL = 'https://raw.githubusercontent.com/CampusWorkshop2022-team04/Digital-Consultant/main/json/articles.json?token=GHSAT0AAAAAABQP6BDBDHU72DYNBBMD6ORQYO6WEQQ';

var requestArticles = new XMLHttpRequest();
var articles = []

requestArticles.open('GET', requestArticlesURL);

requestArticles.responseType = 'json';
requestArticles.send();

requestArticles.onload = function() {
    articles = requestArticles.response;
    console.log(articles)
}
