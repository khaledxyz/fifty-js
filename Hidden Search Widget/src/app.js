const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('#search');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('search-hidden')
})