
const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => displayDog(data))
}
const displayDog = doglist => {
    const main = document.getElementById('main');
    const first10Data = doglist.slice(0, 10);
    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.className = "col-lg-4 ";
        div.innerHTML = `
            
            
            <h4 class="mx-3 my-2 text-center">Name: ${dog.name}</h4>
             <p class="text-center">${dog.temperament}</p>
             

             <h4 class="text-center"> Weight : ${dog.weight.imperial}</h4>
             <img width="350px" height="250px" class="rounded mx-auto d-block" src="${dog.image.url}" alt="">


        `;
        console.log(dog)
        main.appendChild(div)
    }
}
