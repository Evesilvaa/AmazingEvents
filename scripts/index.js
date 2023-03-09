const conteinerCards = document.querySelector ('#conteiner')

const cardsGenerated = createCards(data.events)


conteinerCards.innerHTML = cardsGenerated



function createCards(arrayevents) {
  let cards = ''
  for (const event of data.events) {

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


conteinerCards.innerHTML = cardsGenerated;

// category
// Obtener todos los elementos  de categoría
const categoryInputs = document.querySelectorAll("input[type=checkbox]");
 console.log(categoryInputs);


function filterCategory(data, category){
  const filterArray = data.filter((e)=> category.indexOf(e.category) !== -1);
}

categoryInputs.forEach(function(checkbox){
  checkbox.addEventListener("change" ,function(){
    const category =Array.from(categoryInputs)
    .filter((i)=> i.checked)
    .map((i)=> i.value);

    if (category.length > 0) {
      filterCategory(data.events,category);
     

    }
    else {
      conteinerCards.innerHTML= cardsGenerated;
      
    }
  });
});



//search--------------------------------

const searchEvent = document.getElementById('search');

searchEvent.addEventListener("change",()=>{
  let eventFilter = data.events.filter((event)=> event.name.toLowerCase().includes(searchEvent.value.toLowerCase()))

  conteinerCards.innerHTML = createCards(eventFilter);
});