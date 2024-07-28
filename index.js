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

function playRound(getHumanChoice, getComputerChoice)
{
    //Paper
    if (getHumanChoice == "Paper" && getComputerChoice == "Paper")
    {
        console.log("That's a tie! Computer picked Paper");
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Paper" && getComputerChoice == "Scissors")
    {
        console.log("Computer Scores! Computer picked Scissors");
        computerScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Paper" && getComputerChoice == "Rock")
    {
        console.log("Human Scores! Computer picked Rock");
        humanScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    //Scissors

    if (getHumanChoice == "Scissors" && getComputerChoice == "Scissors")
    {
        console.log("That's a tie! Computer picked Scissors");
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Scissors" && getComputerChoice == "Rock")
    {
        console.log("Computer Scores! Computer picked Rock");
        computerScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Scissors" && getComputerChoice == "Paper")
    {
        console.log("Human Scores! Computer picked Paper");
        humanScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    //Rock
    if (getHumanChoice == "Rock" && getComputerChoice == "Rock")
    {
        console.log("That's a tie! Computer picked Rock");
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Rock" && getComputerChoice == "Paper")
    {
        console.log("Computer Scores! Computer picked Paper}");
        computerScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Rock" && getComputerChoice == "Scissors")
    {
        console.log("Human Scores! Computer picked Scissors");
        humanScore += 1;
        console.log("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
