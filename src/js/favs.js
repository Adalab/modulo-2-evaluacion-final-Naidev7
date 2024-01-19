let favsSeries = [];


const handleFavs = (event, seriesArr) => {
  console.log(event.currentTarget.id);
  const idClickedSerie = event.currentTarget.id;
  const clickedSerie = event.currentTarget;
  clickedSerie.classList.add('favsSection');
  const foundSerieId = seriesArr.find((serie)=>{ idClickedSerie == serie.mal_id
  })
  favsSeries.push(foundSerieId);
  console.log(clickedSerie);

};

const listener = () => {
  const articles = document.querySelectorAll(".js-article");
  for (const oneArticle of articles) {
    oneArticle.addEventListener("click", handleFavs);
  }
};
