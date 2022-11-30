import express from "express";
import * as articleservices from './articlesservices.js';

const app = express();
const PORT = process.env.PORT || 80;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () =>{
    console.log(`servidor rodando com sucesso na porta: http://localhost:${PORT}`)
});

app.get('/', (request, response) => {
    const articles = articleservices.getArticles();
    response.render('pages/page 01', {title: 'ejs', articles});
});

app.get('/artigos/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    const article = articleservices.getArticlesById[articleId];
    const title = (article) ? article.title: "artigo não encontrado";
    response.render('pages/artigos', {title, article});
});

app.use(express.static('public/css'));