let btnCreate = document.getElementById("btnCreate");
let saveCard = [];

btnCreate.addEventListener("click", createCards);

function createCards() {

    saveCard = [];
    document.getElementById("row").innerHTML = "";

    let numberOfCards = document.getElementById("numberOfCards").value;
    let cards = ["heart", "crown", "gem", "spa"];
    let simbolCard;
    let randomCard;
    let randomNumber;

    for (let counter = 1; counter <= numberOfCards; counter++) {

        randomCard = Math.floor(Math.random() * cards.length);
        simbolCard = cards[randomCard];
        randomNumber = Math.floor(Math.random() * 14);

        if (randomNumber == 0) {
            randomNumber = Math.floor(Math.random() * 14);
        } else if (randomNumber == 1) {
            randomNumber = "A";
        } else if (randomNumber == 11) {
            randomNumber = "J";
        } else if (randomNumber == 12) {
            randomNumber = "Q";
        } else if (randomNumber == 13) {
            randomNumber = "K";
        }

        saveCard.push({
            number: randomNumber,
            simbol: simbolCard,
        });
        console.log(saveCard);


        document.getElementById("row").innerHTML += `
    <div class="card">
    <div class="containerCard">
        <div id="containerIconUp" class="fillCards">
            <i class="fas fa-${simbolCard}"></i>
        </div>
        <div id="containerNumber" class="fillCards">
            <p>${randomNumber}</p>
        </div>
        <div id="containerIconDown" class="fillCards">
            <i class="fas fa-${simbolCard}"></i>
        </div>
    </div>
</div>`;
    }

}

setInterval(function(){
    createCards()
}, 10000)

