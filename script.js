let secretNumber = 0;
let guessList = [];
let guessHistoryList = document.getElementById("guessHistory");
let guessedNumber = document.getElementById("guessedNumber");
const maxGuesses = 4;
let score = maxGuesses;

function generateNumber(){
    secretNumber = Math.floor(Math.random() * 100);
    console.log(secretNumber)
}

function verifyNumber(){
    if (score == 0){
        showResult();
    }
    else if (score > 0){
        if (guessedNumber.value == "" || guessedNumber.value>100 || guessedNumber.value<0){
            alert("Type a valid number");
        }
        else{
            if (guessedNumber.value == secretNumber){
                let li = document.createElement("li");
                li.innerHTML = guessedNumber.value;
                li.classList.toggle("correct");
                guessHistoryList.appendChild(li);
                showResult();
            }
            else if (guessedNumber.value>secretNumber){
                let li = document.createElement("li");
                li.innerHTML = guessedNumber.value;
                li.classList.toggle("bigger");
                guessHistoryList.appendChild(li);
            }
            else if (guessedNumber.value<secretNumber){
                let li = document.createElement("li");
                li.innerHTML = guessedNumber.value;
                li.classList.toggle("smaller");
                guessHistoryList.appendChild(li);
            }
            score-=1;
        }
    }
    guessedNumber.value = "";
}

function showResult(){
    let result = document.getElementById("result");
    let scoreLabel = document.getElementById("score");
    let restart = document.getElementById("restart");
    restart.style.display = "block";

    if (score >= 0){
        result.style.color = "green";
        result.innerHTML = "Congrats you guessed the right number!!!";
        scoreLabel.innerHTML = "Your Score is: " + score; 
    }
    else{
        result.style.color = "red";
        result.innerHTML = "Ah bummer. Try again!!!";
        scoreLabel.innerHTML = "Your Score is: " + score;
    }
}

guessedNumber.addEventListener("keydown", function(e){
    if (e.code === "Enter"){
        verifyNumber();
    }
})