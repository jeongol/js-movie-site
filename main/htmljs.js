const API_KEY = '609d96fd9ad77dc5f8d4e2f536aece54';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// api 호출
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));

// 받아온 데이터로 카드 생성 및 DOM에 추가
fetch(URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container');
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));

// 영화 카드 ui 구현
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>Rating: ${movie.vote_average}</span>
        `;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card; 
}

// 
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});




















