const btnGuess = document.querySelector("#btn-guess");
const btnReset = document.querySelector("#btn-reset");
let randomNum = Math.round(Math.random() * 10);
let attempts = 1;

btnGuess.addEventListener("click", handleGuessClick);
btnReset.addEventListener("click", handleResetClick);
console.log(randomNum)
function handleGuessClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNum) {
        togglePage();
        const attemptsMsg = attempts > 1 ? "attempts" : "attempt";
        document.querySelector(".page2 h2").innerText = `You got it right in ${attempts} ${attemptsMsg}`;        
    }
    inputNumber.value = "";
    attempts++;
};

function handleResetClick() {
    togglePage();
    attempts = 1;
    // randomNum = Math.round(Math.random() * 10);
};

function togglePage() {
    document.querySelector(".page1").classList.toggle("hide");
    document.querySelector(".page2").classList.toggle("hide");
}

// todo:
// add a limit to accept only nums btw 0 and 10
// keep the btnGuess from counting the click when there is no input
// bug - randomNum not resetting