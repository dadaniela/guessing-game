const randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

let attempts = 1;

function handleGuessClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNum) {
        document.querySelector(".page1").classList.add("hide");
        document.querySelector(".page2").classList.remove("hide");
        const attemptsMsg = attempts > 1 ? "attempts" : "attempt";
        document.querySelector(".page2 h2").innerText = `You got it right in ${attempts} ${attemptsMsg}`;        
    }
    inputNumber.value = "";
    attempts++;
}

const btnGuess = document.querySelector("#btn-guess");
const btnReset = document.querySelector("#btn-reset");

btnGuess.addEventListener("click", handleGuessClick);
btnReset.addEventListener("click", function() {
    document.querySelector(".page2").classList.add("hide");
    document.querySelector(".page1").classList.remove("hide");
    attempts = 1;
})