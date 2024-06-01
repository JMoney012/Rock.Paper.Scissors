let playGame = confirm("Want to play Rock, Paper, Scissors?");
while (playGame) {
    const playerChoice = prompt("Enter rock, paper, or scissors");
    if (playerChoice) {
        const playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
                : computerChoice === 2 ? "paper" 
                : "scissors";
            let result = 
            playerOne === computer 
                ? "It's a tie!" 
                : playerOne === "rock" && computer === "paper"
                ? 'playerOne: ' + playerOne + ' computer: ' + computer + '\nComputer wins!'
                : playerOne === "paper" && computer === "scissors"
                ? 'playerOne: ' + playerOne + ' computer: ' + computer + '\nComputer wins!'
                : playerOne === "scissors" && computer === "rock"
                ? 'playerOne: ' + playerOne + ' computer: ' + computer + '\nComputer wins!'
                : 'playerOne: ' + playerOne + ' computer: ' + computer + '\nPlayerOne wins!';
            alert(result);
            playGame = confirm("Want to play again?");
            if(!playGame) alert("Goodbye!");
            continue;
        } else {
            alert("Invalid choice, please try again");
        }
    } else {
        alert("I guess not, maybe next time!")
        break;
    }
} 