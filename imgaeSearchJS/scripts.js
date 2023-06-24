const access_key = '4vF7MrufouCNks5fM5hcQaVD4w7nzi19zlK3ASs1V64';

const formElement = document.querySelector('form');
const inputElement = document.getElementById('search_input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more');

let inputData = '';
let pageResults = 1;


async function searchImages() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageResults}&query=${inputData}&client_id=${access_key}`;
    // const url = `"https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=${access_key}"`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

// console.log(data);

// searchImages()
//
    if (pageResults === 1) {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        console.log('result')
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement('a');

        imageLink.href = result.link.html;
        imageLink.target = '_blank';
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(imageWrapper);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    pageResults++;
    if (pageResults > 1) {
        showMore.style.display = 'block';
    }
}

formElement.addEventListener('submit',
    (e) => {
    e.preventDefault();
    pageResults = 1;
    searchImages();
})



showMore.addEventListener('click',
    () => {
    searchImages();
})

