const conteinerCards = document.querySelector ('#conteiner')



// Filtrar los eventos según si son futuros 
const futureEvents = data.events.filter(event => event.date > data.currentDate);


// Imprimir los eventos filtrados en la consola
console.log(futureEvents);

conteinerCards.innerHTML= futureEvents

let cardsGenerated= createCards(futureEvents)




function createCards(futureEvents) {
  let cards = ''
  for (const event of futureEvents) {

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



conteinerCards.innerHTML = cardsGenerated

const inputCategory = document.querySelector('#category');

inputCategory.addEventListener('click', (e) =>{
  console.log(e.target);
})