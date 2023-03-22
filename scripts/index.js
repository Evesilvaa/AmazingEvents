fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json())
.then( datosApi=> {
 // throw new Error('ocurrio un error al traer los datos de la Api')

const conteinerCards = document.querySelector ('#conteiner');

const cardsGenerated = createCards(data.events);


let events = data.events;

conteinerCards.innerHTML = cardsGenerated;



function createCards(arrayevents) {
  let cards = ''
  for (const event of arrayevents) {

   cards += `<div class="card text-black" style="width: 18rem ; id="card-${event._id}">
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
return cards;
}



// category checkbox 
const categoryInputs = document.querySelectorAll("input[type=checkbox]");
 //console.log(categoryInputs);


function filterCategory(data, category){
  const filterArray = data.filter((e)=> category.indexOf(e.category) !== -1);
}

categoryInputs.forEach(function(checkbox){
  checkbox.addEventListener("change" ,eventsFilter)
});


// search 
const searchInput = document.getElementById('search');


searchInput.addEventListener('input', eventsFilter)


function eventsFilter(){
  const category =Array.from(categoryInputs)
    .filter((i)=> i.checked)
    .map((i)=> i.value);

  let searchText = searchInput.value.toLowerCase()
  
  let eventsFilter = events.filter((e)=>e.name.toLowerCase().includes(searchText) && (category.includes(e.category) || category.length == 0 ) )
  console.log(eventsFilter);

// para que imprima 
  const cardsGenerated = createCards(eventsFilter);
  conteinerCards.innerHTML= cardsGenerated;





    // if (category.length > 0) {
    //   filterCategory(data.events,category);
     

    // }
    // else {
    //   conteinerCards.innerHTML= cardsGenerated;
      
    // }
      
}










// details 

function Details(id) {
  window.location.href = `./details.html?id=${id}`
  
}
conteinerCards.innerHTML = cardsGenerated;
})
.catch(error => console.log(error.message))

