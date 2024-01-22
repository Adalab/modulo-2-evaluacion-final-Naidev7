let favSeries = [];

const handleFavs = (event) => {
  const idClickedSerie = event.currentTarget.id;
  const clickedSerie = event.currentTarget;
  clickedSerie.classList.add("favSection");
  const foundSerieId = seriesArr.find(
    (serie) => serie.mal_id == idClickedSerie
  );
  if (favSeries.indexOf(foundSerieId) === -1) {
    favSeries.push(foundSerieId);
    renderFavs(favSeries, favSection);
  }
  const serieString = JSON.stringify(favSeries);
 localStorage.setItem("favSeries", serieString); 
  return favSeries;
};
const listener = () => {
  const articles = document.querySelectorAll(".js-article");
  for (const oneArticle of articles) {
    oneArticle.addEventListener("click", handleFavs);
  }
};
const getLocalData = () => {
  if (localStorage.getItem("favSeries") !== null) {
    const seriesLocal = JSON.parse(localStorage.getItem("favSeries"));
    renderFavs(seriesLocal, favSection);
  }
};

const renderFavs = (series, favSection) => {
  favSection.innerHTML = "";
  for (const eachFav of series) {
    let article = document.createElement("article");
    article.setAttribute("class", "js-article article");
    article.setAttribute("id", `${eachFav.mal_id}`);

    let tittle = document.createElement("h2");
    tittle.appendChild(document.createTextNode(`${eachFav.title}`));
    tittle.setAttribute("class", "title");

    let img = document.createElement("img");
    img.src = eachFav.images.jpg.image_url;
    img.setAttribute("class", "img");

    let btnDelete = document.createElement("button");
    btnDelete.appendChild(document.createTextNode("X"));
    btnDelete.setAttribute("class", "btnDelete js-btnDelete");
    btnDelete.setAttribute("id", `${eachFav.mal_id}`);

    /*      let btnAdd = document.createElement('button');
       btnAdd.appendChild( document.createTextNode('+'));
       btnAdd.setAttribute('class', 'btnAdd js-btnAdd');

       let btnRemove = document.createElement('button');
       btnRemove.appendChild( document.createTextNode('-'));
       btnRemove.setAttribute('class', 'btnRemove js-btnRemove'); */

    article.appendChild(tittle);
    article.appendChild(img);
    article.appendChild(btnDelete);
    /*        article.appendChild(btnAdd);
       article.appendChild(btnRemove); */

    favSection.appendChild(article);
  }
  favDeleted();
};



const getDeleteFav = (event) => {
  event.preventDefault();
  console.log(favSeries)
  const idDelete = event.currentTarget.id;
  const foundId = favSeries.findIndex((serie) => serie.mal_id == idDelete);
  favSeries.splice(foundId, 1);
  console.log(favSeries)
  localStorage.setItem("favSeries", foundId); 
};

const favDeleted = () => {
  const favDeleted = document.querySelectorAll(".js-btnDelete");
  for (const eachDeleted of favDeleted) {
    eachDeleted.addEventListener("click", getDeleteFav);
  }
};

getLocalData();
