//TODO Create game functionality. 
//For the moment is only sceleton. 

function init() {
    createCardField()
}

function fetchCard() {
    //Fetch data from cards.json file
    // let res = await fetch('cards.json');
    // let cards = await res.json();
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    return cards[Math.floor(Math.random() * cards.length)];
}
function createCard(text) {
    let cardContainer = document.getElementsByClassName('card-container');
    let outerDiv = document.createElement("div");
    let innerDiv = document.createElement("div");

    cardContainer[0].append(outerDiv);
    outerDiv.append(innerDiv);
    outerDiv.classList.add('border-card');
    innerDiv.classList.add('closed-card');
    innerDiv.innerHTML = text;
}

function operCard(card) {
    card.classList.add('open-card');
    card.classList.remove('closed-card')
}
function createCardField() {
    let field = [];
    [...new Array(64)].map((el) => {
        createCard(fetchCard());
        field.push(fetchCard())

        //If get data from cards.json file
        // fetchCard().then((meta) => {
        //     let key = Object.keys(meta)
        //     createCard(key);
        //     field.push(key)
        // });
    })

    field.map(el => {
        el.addEventListener('click', operCard())
        console.log(el)
    })
}

window.addEventListener('DOMContentLoaded', init());