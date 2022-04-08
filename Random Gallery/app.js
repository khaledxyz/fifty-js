const feed = document.querySelector('#feed');
let unsplashLink = "https://source.unsplash.com/random/";

for(let i = 0; i < 9; i++){
    let imgSrc = `${unsplashLink}${getRandomSize()}`;
    feed.innerHTML += `<div class="img-container"><img src="${imgSrc}"></div>`;
}

function getRandomSize(){
    return `${randomNumber()}x${randomNumber()}`;
}
getRandomSize()
function randomNumber(){
    return Math.floor(Math.random() * 10) + 300;
}