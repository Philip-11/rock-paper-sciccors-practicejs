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

    while (humanChoice !== "Rock" || "Scissors" || "Paper")
    {
        humanChoice = prompt("What is your pick? (Rock, Scissors, Paper)");

        if (humanChoice == "Rock")
        {
            return "Rock";
        }

        if (humanChoice == "Scissors")
        {
            return "Scissors";
        }

        if (humanChoice == "Paper")
        {
            return "Paper";
        }

        
    }   
}

