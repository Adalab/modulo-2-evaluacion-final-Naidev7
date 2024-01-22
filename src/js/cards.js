let seriesArr = [];
const apiUrl = `https://api.jikan.moe/v4/anime?`;
const getDataApi = (searchValue) => {
  fetch(`${apiUrl}q=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      seriesArr = data.data;
      renderPrint(seriesArr, cardsSection);
    });
};
const renderPrint = (series, section) => {
   section.innerHTML = '';
   for (const item of series) {
        let article = document.createElement("article");
        article.setAttribute('class', 'js-article article');
        article.setAttribute('id', `${item.mal_id}`);

        
        let tittle = document.createElement("h2");
        tittle.appendChild(document.createTextNode(`${item.title}`));
        tittle.setAttribute('class', 'title');
  
        let img = document.createElement("img");
        img.src = item.images.jpg.image_url;
        img.setAttribute('class', 'img');
  
        article.appendChild(tittle);
        article.appendChild(img);
  
        section.appendChild(article);
    }    
    listener();
};
const handleSearch = (event) => {
  event.preventDefault();
  const searchValue = inputSearch.value.toLowerCase();
  getDataApi(searchValue);
};
btnSearch.addEventListener("click", handleSearch);
