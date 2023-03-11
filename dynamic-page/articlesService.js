const articles = [
    {
        id: 1,
        title: 'Lunatics running asylum: Magistrate overruled for clearing teacher',
        desc: 'A NSW school teacher will again face court accused of shoving a student even though a magistrate threw out the charge as a “classic case of the insanity” gripping the world that drives all teachers out of the job and threatens to collapse society at large.'
    },
    {
        id: 2,
        title: 'Why this Sydney school is sending parents back to the classroom',
        desc: 'As a mother to three school-aged boys, Christine Keriniotou has been to dozens of parent-teacher evenings and read through as many half-yearly report cards.'
    }
];

function getArticles(){
    return articles;
};

function getArticleById(articleId){
    return articles.find((article) => {
        return article.id === Number(articleId);
    });
};

export { getArticles, getArticleById };