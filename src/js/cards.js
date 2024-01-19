const cardsSection = document.querySelector('.js-cardsSection');

let seriesArr = [];

const apiUrl = 'https://api.jikan.moe/v4/anime?q=naruto';

const getDataApi =() =>{
    fetch(apiUrl)
    .then((response)=> response.json())
    .then((data)=>{
        seriesArr = data.data;
        console.log(seriesArr);
        rederPrint(seriesArr);
        const seriesString = JSON.stringify(seriesArr);
        localStorage.setItem('seriesList', `${seriesString}`);
    })
}
getDataApi();


const rederPrint= (seriesArr)=>{
    cardsSection.innerHTML = ''
    for(const item of seriesArr){
        let article = document.createElement('article');

        let tittle = document.createElement('h2'); 
        tittle.appendChild(document.createTextNode(`${item.title}`));


        let img = document.createElement('img'); 
        img.src = item.images.jpg.image_url;

        article.appendChild(tittle);
        article.appendChild(img);


        cardsSection.appendChild(article);
    }
};

const getLocalData = ()=>{
    const seriesLocal = JSON.parse(localStorage.getItem('seriesList'));
    seriesLocal ? rederPrint() : getDataApi();
}
getLocalData();