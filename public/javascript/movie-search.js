async function movieLookup() {
    event.preventDefault();
    const movieName = document.querySelector('#post-title')
    const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=74b323f43b739bb239272a010ae88bc3&language=en-US&query=' + movieName.value + '&page=1&include_adult=false';

    getMovieId(movieUrl)
};

function getMovieId(url) {
    postName = document.querySelector('#post-title');
    postURL = document.querySelector('#post-url');

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            movieId = (data.results[0].id);
            movieName = (data.results[0].title)
            movieURL = ('https://www.themoviedb.org/movie/' + movieId);

            postName.value = movieName
            postURL.value = movieURL;
        });
    };



document.querySelector('#movie-lookup-btn').addEventListener('click', movieLookup);