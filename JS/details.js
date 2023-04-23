
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const URL = wordpressAPI + productsURL + id;
const movieDetails = document.querySelector("#movie-details");
const ctaButton = document.querySelector('.cta-button');

import { wordpressAPI, productsURL, loader, removeLoader} from "./components.js";


async function getMovie() {
    const response = await fetch(URL);
    const movieData = await response.json();
    return movieData;
}

async function renderMovie() {

    const movieData = await getMovie();
    createMovieDetails(movieData);
}

function createMovieDetails(movie) {
    removeLoader();
    const container = document.querySelector('.details-container');
    const movieContainer = document.createElement('div');
    const ctaButton = document.querySelector(".checkout");
    ctaButton.href = `checkout.html?id=${movie.id}`;
    movieContainer.id = movie.id;
    const title = document.createElement('h2');
    const details = document.createElement('p');
    const price = movie.prices.price/100 + ' NOK';
    title.innerText = movie.name;
    details.innerText = movie.description.replaceAll('<div>', '').replaceAll('<p>', '').replaceAll('</p>', '').replaceAll('</div>', '').replaceAll('<span class="sc-5f699a2-2 cxqNYC" role="presentation" data-testid="plot-xl">', '' ).replaceAll('</span>', '');
    movieContainer.append(title);

    for (let i = 0; i < movie.images.length; i++) {
        const imgData = movie.images[i];
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        movieContainer.append(img);
       ;
    }
    movieContainer.append(details, price), ctaButton;
    container.append(movieContainer);
}
getMovie();
renderMovie();

