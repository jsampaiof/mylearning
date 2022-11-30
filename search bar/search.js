function Searching(){
    const searchValue = document.querySelector('#search-bar').value;
    const articles = document.querySelector('#articles');
    const search = articles.map(searchValue);
    return search;
}

console.log(Searching);