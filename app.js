let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const userWord = "user".fontsize(3).sub();
const compWord = "comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r")return "Rock";
    if(letter === "p")return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = convertToWord(user) + " BEATS " + convertToWord(computer) + ". YOU WIN! 😉"; ES6 version is down below
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} Beats ${convertToWord(computerChoice)}${compWord}. You Win! 😉`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    // result_p.innerHTML = convertToWord(computer) + " BEATS " + convertToWord(user) + ". YOU LOOSE! 🤥";
    result_p.innerHTML = `${convertToWord(computerChoice)}${compWord} Looses To ${convertToWord(userChoice)}${userWord}. You Loose! 🤥`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    // result_p.innerHTML = convertToWord(user) + " DRAWS " + convertToWord(computer) + ". IT'S A TIE! 😐";
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} Draws ${convertToWord(computerChoice)}${compWord}. It's A Tie! 😐`;
    userChoice_div.classList.add('white-glow');
    setTimeout(function() { userChoice_div.classList.remove('white-glow')}, 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
    
    }
}
game("c");
function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();

