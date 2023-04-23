const wordpressAPI = 'http://squareeyes-projectcom.local/wp-json/wc/store/';
const productsURL = 'products/';
const featuredURL = '?&featured=true';
const spinner = document.querySelector('.container');

async function getMovies() {
    const response = await fetch(wordpressAPI + productsURL);
    const movies = await response.json();
    return movies;
}
async function getFeaturedMovies() {
    const response = await fetch(wordpressAPI + productsURL + featuredURL);
    const featuredMovies = await response.json();
    console.log(featuredMovies);
    return featuredMovies;
}

async function renderMovies() {

    const movies = await getMovies();
    const featuredMovies = await getFeaturedMovies();

    createFeaturedMoviesHTML(featuredMovies);
    createMoviesHTML(movies);

}

function createMoviesHTML(movies) {

    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        createMovieHTML(movie)
    }

}
function createFeaturedMoviesHTML(featuredMovies) {

    for (let i = 0; i < featuredMovies.length; i++) {
        const featuredMovie = featuredMovies[i];
        createFeaturedMovieHTML(featuredMovie)
    }

}
function loader() {
    spinner.innerHTML = `<div class="loader"></div>`;
}
loader()

function createMovieHTML(movie) {
    spinner.classList.remove("loader");
    const container = document.querySelector('.container');
    const movieContainer = document.createElement('a');
    movieContainer.id = movie.id;
    movieContainer.href = `product.details.html?id=${movie.id}`;
    const title = document.createElement('h2');
    const price = movie.prices.price/100 + ' NOK';
    title.innerText = movie.name;
   
    movieContainer.append(title);

    for (let i = 0; i < movie.images.length; i++) {
        const imgData = movie.images[i];
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        movieContainer.append(img);
       ;
    }
    movieContainer.append(price);
    container.append(movieContainer);
}

function createFeaturedMovieHTML(featuredMovie) {
    const container = document.querySelector('.featured-container');
    const h1 = document.querySelector('.featured-h1');
    h1.innerText = 'Featured';
    const featuredContainer = document.createElement('a');
    featuredContainer.id = featuredMovie.id;
    featuredContainer.href = `product.details.html?id=${featuredMovie.id}`;
    const title = document.createElement('h2');
    const price = featuredMovie.prices.price/100 + ' NOK';
    title.innerText = featuredMovie.name;
   

    for (let i = 0; i < featuredMovie.images.length; i++) {
        const imgData = featuredMovie.images[i];
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        featuredContainer.append(img);
       ;
    }
    featuredContainer.append(title, price);
    container.append(featuredContainer);

}

export {
    wordpressAPI,
    productsURL,
    featuredURL,
    getFeaturedMovies,
    getMovies,
    renderMovies,
    createFeaturedMovieHTML,
    createMovieHTML
}