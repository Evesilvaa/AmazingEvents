const conteinerCards = document.querySelector ('#conteiner')


// Filtrar los eventos según si son pasados 
const pastEvents = data.events.filter(event => event.date < data.currentDate);

console.log(pastEvents);

conteinerCards.innerHTML= pastEvents

let cardsGenerated =createCards(pastEvents);
conteinerCards.innerHTML = cardsGenerated

function createCards(pastEvents) {
  let cards = ''
  for (const event of pastEvents) {

   cards += `<div class="card text-black" style="width: 18rem ;">
    <img src="${event.image}" class="card-img-top" alt="image Event">
    <div class="card-body">
    <h5 class="card-title ">${event.name}</h5>
    <p class="card-text">${event.date}</p>
    <p class="card-text">${event.description}</p>
    <p class="card-text">Category:${event.category}</p>
    <p class="card-text">Place:${event.place}</p>
    <p class="card-text">Capacity:${event.capacity}</p>
    <p class="card-text">Assistance:${event.assistance}</p>
    <p class="card-text position-absolute"> Price: ${event.price}</p>
    <input class="btn btn-primary " type="button" onclick="Details('${event._id}')" value="Details" id="button" >
  </div>
  </div>` 
}
return cards
}

// details 

function Details(id) {
  window.location.href = `./details.html?id=${id}`
  
}


const inputCategory = document.querySelector('#category');

inputCategory.addEventListener('click', (e) =>{
  console.log(e.target);
})

let category =["Food Fair", "Museum", "Music Concert", "Costume Party", "Race", "Book Exchange","Cinema"]

let filterCate= data.events.filter ((e)=> data.events.includes());
console.log(category);

filterCate.innerHTML = createCards;