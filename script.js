const url = 'https://jsonfakery.com/movies/paginated';
const url2 = 'https://jsonfakery.com/movies/simple-paginate';

const serach = document.querySelector('.inputFill');
const btClear = document.querySelector('.btClear');
const list = document.querySelector('.list');

let anim = document.createElement('li');
    anim.setAttribute('class', 'anim');
    anim.textContent = 'Loading...';
    let span1 = document.createElement('span');
    span1.setAttribute('class', 'spans');

    list.appendChild(anim);
    anim.appendChild(span1);

fetch('https://jsonfakery.com/movies/paginated')

   .then(response => {
     return response.json();
   })
   .then(data => {
       movies = data.data;
       renderFilms();
   })
   .catch(err => {
    console.log(err);
   })

let movies = [];

function renderFilms(films = movies) {
     list.innerHTML = '';
     if(films.length === 0) {
       let nofaund = document.createElement('li');
       nofaund.setAttribute('class', 'nofound');
       nofaund.textContent = 'Movie not found';

       list.appendChild(nofaund);
     }

     films.forEach((item, index) => {
        //console.log(item)
        let { id, poster_path, original_title, overview, popularity, release_date} = item;
        let li = document.createElement('li');
        li.setAttribute('class', 'card');
        li.setAttribute('id', id);
        li.innerHTML = `
        <img src="${poster_path}" alt="poster" class="imgCard">
        <p class="titleCard">${original_title}</p>
        <p class="opisCard">${overview}</p>
        <p class="realesData">${release_date}</p>
        <span class="popularity">${popularity}</span>
        <button class="btAdd">Add to cart</button>
        `;

        list.appendChild(li);

     })

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('imgCard')) {
        const card = e.target.closest('.card');
        const img = card.querySelector('.imgCard').src;
        const title = card.querySelector('.titleCard').textContent;
        const opis = card.querySelector('.opisCard').textContent;
        const realis = card.querySelector('.realesData').textContent;

        let cards = {img, title, opis, realis};
        location.href = 'opis.html';

        localStorage.setItem('cards', JSON.stringify(cards));

    }
})


}

btClear.addEventListener('click', () => {
    serach.value = '';
    renderFilms();

});

serach.oninput = () => {
    const titlefilm = serach.value.toLowerCase();
    const result = movies.filter(item => {
       return item.original_title.toLowerCase().includes(titlefilm);

    })
    renderFilms(result);
};


