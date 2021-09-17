import "./style.css";

window.onload = function () {
    let bsCard = document.createElement("div");
    bsCard.id = "baseCard";
    document.querySelector("#bodyCard").appendChild(bsCard);

    let iconUp = document.createElement("spam");
    iconUp.id = "iconTop";
    iconUp.className = "colores";
    document.querySelector("#baseCard").appendChild(iconUp);

    let num = document.createElement("spam");
    num.id = "numMid";
    num.className = "colores";
    document.querySelector("#baseCard").appendChild(num);

    let iconDown = document.createElement("spam");
    iconDown.id = "iconBot";
    iconDown.className = "colores";
    document.querySelector("#baseCard").appendChild(iconDown);

    let btn = document.createElement("button");
    btn.id = "randomButton";
    btn.onclick = showCard;
    btn.type = "button";
    btn.innerHTML = "Random Card";
    document.querySelector("#bodyCard").appendChild(btn);

    function showCard() {
        let cards = ["♥", "♦", "♣", "♠"];
        let numbers = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K"
        ];

        function randomNumber(arr) {
            let x = Math.floor(Math.random() * arr.length);

            return x;
        }

        let ininumObt = randomNumber(numbers);
        let inipntObt = randomNumber(cards);
        let numObt = numbers[ininumObt];
        let pntObt = cards[inipntObt];

        if (pntObt === "♥" || pntObt === "♦") {
            document.querySelector("#iconTop").style.color = "red";
            document.querySelector("#numMid").style.color = "red";
            document.querySelector("#iconBot").style.color = "red";
        } else {
            document.querySelector("#iconTop").style.color = "black";
            document.querySelector("#numMid").style.color = "black";
            document.querySelector("#iconBot").style.color = "black";
        }

        document.getElementById("iconTop").innerHTML = pntObt;
        document.getElementById("iconBot").innerHTML = pntObt;
        document.getElementById("numMid").innerHTML = numObt;
    }

    let timer = setInterval(function () {
        showCard();
    }, 10000);
};
