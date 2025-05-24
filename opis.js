const storegeCards = JSON.parse(localStorage.getItem('cards'));
const storegArray = Array(storegeCards);
const list = document.querySelector('.list');
const btHome = document.querySelector('.btHome');

function renderCards() {
   if(storegArray) {
     for(let i = 0; i < storegArray.length; i++) {
        let films = storegArray[i];
        let li = document.createElement('li');
        li.setAttribute('class', 'card');
        li.innerHTML = `
         <div class="center">
         <img src="${films.img}" alt="filmimg" class="imgCard">
         </div>
         <p class="titleCard">${films.title}</p>
         <p class="opisCard">${films.opis}</p>
         <p class="pcenter">
         <span class="reales">${films.realis}</span>
         </p>
        `;

        list.appendChild(li);

     }
   }
}

renderCards();

btHome.addEventListener('click', () => {
    location.href = 'index.html';
});
