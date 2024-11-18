const rock = document.getElementById("play1");
const paper = document.getElementById("play2");
const scissors = document.getElementById("play3");
const reset = document.getElementById("reset");
const winner = document.getElementById("result")
const win = document.getElementById("scores1");
const lose = document.getElementById("scores2");
const draw = document.getElementById("scores3");
let winNum = 0;
let loseNum = 0;
let drewNum = 0;
let result = "";

function game() {
    const compChoise = Math.floor(Math.random() * 3);

    if (result === "rock" && compChoise === 2 || result === "paper" && compChoise === 0 || result === "scissors" && compChoise === 1) {
        winner.textContent = "You win!";
        winNum++;
        win.textContent = winNum;
    } else if (result === "rock" && compChoise === 1 || result === "paper" && compChoise === 2 || result === "scissors" && compChoise === 0) {
        winner.textContent = "You lost!";
        loseNum++;
        lose.textContent = loseNum;
    } else {
        winner.textContent = "Draw!";
        drewNum++;
        draw.textContent = drewNum
    }
}

rock.addEventListener("click", () => {
    result = "rock";
    game()
});

paper.addEventListener("click", () => {
    result = "paper";
    game()
});

scissors.addEventListener("click", () => {
    result = "scissors";
    game()
});

reset.addEventListener("click", () => {
    winNum = 0;
    loseNum = 0;
    drewNum = 0;
    win.textContent = winNum;
    lose.textContent = loseNum;
    draw.textContent = drewNum;
    winner.textContent = ""
})
