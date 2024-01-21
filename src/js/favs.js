let favSeries = [];

const handleFavs = (event) => {
  const idClickedSerie = event.currentTarget.id;
  const clickedSerie = event.currentTarget;
  clickedSerie.classList.add("favSection");
  const foundSerieId = seriesArr.find(
    (serie) => serie.mal_id == idClickedSerie
  );
  if(favSeries.indexOf(foundSerieId) < 0){
    favSeries.push(foundSerieId);
    renderPrint(favSeries, favSection);
  }
  const serieString = JSON.stringify(favSeries);
  localStorage.setItem('favSeries', serieString);
};


/* const getLocalData = ()=>{
  const seriesLocal = JSON.parse(localStorage.getItem('favSeries'));
  seriesLocal ? rederPrint(favSeries, favSection) : null;
}
getLocalData(); */

const listener = () => {
  const articles = document.querySelectorAll(".js-article");
  for (const oneArticle of articles) {
    oneArticle.addEventListener("click", handleFavs);
  }
};
