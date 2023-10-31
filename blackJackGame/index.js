let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Lloyd",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" + player.chips

function getRandomCard() {
    let num = Math.floor(Math.random() * 13 + 1)
    if (num == 1) {
        return 11
    }else if (num > 10) {
        return 10
    }else{
        return num
    }
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true
    }else{
        message = "you're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}
function newCard(){
    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        renderGame()
    }
}
function startGame(){
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
}
