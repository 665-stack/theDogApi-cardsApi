/* 
==== How to do this api for loading from tap to search btn =====
 1. button event handler setup
 2. get input value
 3. error handling for string value

*/
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);

    //akhaner if er isNaN number bade ja ace shob accept korbe.
    if (isNaN(inputValue) || inputValue == "") {
        // alert('Please enter a number')
        error.innerText = 'Please enter a number';
        input.value = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "Please enter a positive number"
        input.value = '';
    }
    else if (inputValue > 52) {
        error.innerText = "Please enter a number lower than 52";
        input.value = '';
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))


        error.innerText = '';
        input.value = '';
    }
}
const cardsDisplay = cards => {
    for (const card of cards) {
        console.log(card);
    }
}