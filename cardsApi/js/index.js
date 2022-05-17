/* 
==== How to do this api for loading from tap to search btn =====
 1. button event handler setup
 2. get input value
 3. error handling for string value

*/

// Global variable's
const main = document.getElementById('main')


// get input value, error handle and load data
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);

    //akhaner if er isNaN number bade ja ace shob accept korbe.
    if (isNaN(inputValue) || inputValue == "") {
        // alert('Please enter a number')
        error.innerText = 'Please enter a number';
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "Please enter a positive number"
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue > 52) {
        error.innerText = "Please enter a number lower than 52";
        input.value = '';
        main.innerHTML = '';
    }
    else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))


        error.innerText = '';
        input.value = '';
    }
}
// And here display load data
const cardsDisplay = cards => {
    for (const card of cards) {
        // console.log(card);
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("col-md-6");
        div.classList.add("col-sm-12");
        div.classList.add("mb-5");
        div.innerHTML = `
      <div class="card" style="width: 18rem;">
         <img src="${card.image}" class="card-img-top w-50 mx-auto py-3" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
               <button onclick="cardDetails('${card.code}')" class="btn btn-secondary">See Details</button>
            </div>
      </div>
        `;
        main.appendChild(div);
    }
}
const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement('div');
            main.innerHTML = "";
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${singleCard.image}" class="card-img-top w-50 mx-auto py-3" alt="...">
             <div class="card-body text-center">
                      <h5 class="card-title"> ${singleCard.suit}</h5>
                      <p class="card-text">Code: ${singleCard.code}</p>
                      <p class="card-text">Value: ${singleCard.value}</p>

              </div>
           </div>
            `;
            main.appendChild(div)
        })

}
