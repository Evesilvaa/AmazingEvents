const conteinerCards = document.querySelector('#conteiner')

let cards = ''

const event = data.events;
const currentDays = data.currentDate;


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
      <a href="#" class="btn btn-primary  ">Details</a>
    </div>
    </div>` 
}
    
    for (const event of currentDays) {
        
        if (event< currentDays){
            console.log("este evento es pasado");
        } else if ( event > currentDays){
            console.log("este evento es a futuro");
        }
           
    }


conteinerCards.innerHTML = cards




