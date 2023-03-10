import express from 'express';
import * as articleService from './articlesService.js';

const app = express();
const PORT = process.env.PORT || 220;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`servidor rodando na porta: http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    const articles = articleService.getArticles();
    response.render('pages/home', {title: 'ejs', articles});
})

app.get('/artigos/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    const article = articleService.getArticleById(articleId);
    const title = (article) ? article.title : 'Artigo não encontrado';
    response.render('pages/article', {title, article});
})