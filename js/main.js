const initgame = () => {
    const startGame = confirm("Want to play Rock, Paper, Scissors?");
    startGame ? playGame() : alert("I guess not, maybe next time!");
};





const playGame = () => { 
while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPayerChoice(playerChoice);
    if (playerChoice === " ") {
        invalidChoice();
        continue;
    }
    if(!playerChoice) {
        decidedNotToPlay();
        break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
        invalidChoice();
        continue;
    }
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result)
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};
    
const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors?");
};

const formatPayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === " ") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess not, maybe next time!");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("Invalid choice, please try again");
};

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNum];
};

const determineWinner = (player, computer) => {
    const winner = 
        player === computer
            ? "It's a tie!" 
            : player === "rock" && computer === "paper"
            ? 'playerOne: ' + player + ' computer: ' + computer + '\nComputer wins!'
            : player === "paper" && computer === "scissors"
            ? 'playerOne: ' + player + ' computer: ' + computer + '\nComputer wins!'
            : player === "scissors" && computer === "rock"
            ? 'playerOne: ' + player + ' computer: ' + computer + '\nComputer wins!'
            : 'playerOne: ' + player + ' computer: ' + computer + '\nPlayerOne wins!';

            return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm ("Would you like to play again?");
};

const thanksForPlaying = () => {
    alert("Thanks for playing!");
};

initgame();