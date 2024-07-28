//Scores

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    
    if (compChoice === 0)
    {
        return "Rock";
    }

    if (compChoice === 1)
    {
        return "Scissors";
    }

    if (compChoice === 2)
    {
        return "Paper";
    }
}

function getHumanChoice() {
    let humanChoice;
    let answer;

    while (answer !== "rock" || "scissors" || "paper")
    {
        humanChoice  = prompt("What is your pick? Rock, Paper, Scissors");
        answer = humanChoice.toLowerCase()
        if (answer == "rock")   
        {
            return "Rock"
        }

        if (answer == "scissors")
        {
            return "Scissors"
        }

        if (answer == "paper")
        {
            return "Paper"
        }
        
    }
}

console.log(getHumanChoice())
