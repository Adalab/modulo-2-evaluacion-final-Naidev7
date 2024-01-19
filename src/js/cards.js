let seriesArr = [];

const apiUrl = `https://api.jikan.moe/v4/anime?`;

const getDataApi = (searchValue) => {
  fetch(`${apiUrl}q=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      seriesArr = data.data;
      console.log(seriesArr);
      console.log(seriesArr.mal_id);
      renderPrint(seriesArr);
    });
};
const renderPrint = (seriesArr, searchValue) => {
    for (const item of seriesArr) {
        let article = document.createElement("article");
        article.setAttribute('class', 'js-article');
        article.setAttribute('id', `${item.mal_id}`);
        
        let tittle = document.createElement("h2");
        tittle.appendChild(document.createTextNode(`${item.title}`));
  
        let img = document.createElement("img");
        img.src = item.images.jpg.image_url;
  
        article.appendChild(tittle);
        article.appendChild(img);
  
        cardsSection.appendChild(article);
    }    
    listener();
};
const handleSearch = (event) => {
  event.preventDefault();
  const searchValue = inputSearch.value.toLowerCase();
  getDataApi(searchValue);
};
btnSearch.addEventListener("click", handleSearch);
