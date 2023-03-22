fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json())
.then( datosApi=> {
  //throw new Error('ocurrio un error al traer los datos de la Api')

let params = new URLSearchParams(document.location.search)
let id = params.get("id")
console.log(id);



const evento = data.events.filter(evento => evento._id == id);
console.log(evento);


const container = document.getElementById("conteiner");
let cards = '';
  console.log(evento[0].name);  
      cards += 
      `<div class="card text-black" style="width: 18rem ;">
      <img src="${evento[0].image}" class="card-img-top" alt="image Event">
      <div class="card-body">
      <h5 class="card-title ">${evento[0].name}</h5>
      <p class="card-text">${evento[0].date}</p>
      <p class="card-text">${evento[0].description}</p>
      <p class="card-text">Category:${evento[0].category}</p>
      <p class="card-text">Place:${evento[0].place}</p>
      <p class="card-text">Capacity:${evento[0].capacity}</p>
      <p class="card-text">Assistance:${evento[0].assistance}</p>
      <p class="card-text position-absolute"> Price: ${evento[0].price}</p>
      
    </div>
    </div>` 



container.innerHTML = cards
})
.catch(error => console.log(error.message))




