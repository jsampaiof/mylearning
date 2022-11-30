const articles = [
    {
        id: 1,
        title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    {
        id: 2,
        title: "bbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    }
];

function getArticles(){
    return articles;
};

function getArticlesById([articlesId]) {
    return articles.find(article => {
       return article.id === Number(articlesId)
    });
};

export {getArticles, getArticlesById};