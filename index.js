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
        alert("That's a tie! Computer picked Paper");
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Paper" && getComputerChoice == "Scissors")
    {
        alert("Computer Scores! Computer picked Scissors");
        computerScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Paper" && getComputerChoice == "Rock")
    {
        alert("Human Scores! Computer picked Rock");
        humanScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    //Scissors

    if (getHumanChoice == "Scissors" && getComputerChoice == "Scissors")
    {
        alert("That's a tie! Computer picked Scissors");
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Scissors" && getComputerChoice == "Rock")
    {
        alert("Computer Scores! Computer picked Rock");
        computerScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Scissors" && getComputerChoice == "Paper")
    {
        alert("Human Scores! Computer picked Paper");
        humanScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    //Rock
    if (getHumanChoice == "Rock" && getComputerChoice == "Rock")
    {
        alert("That's a tie! Computer picked Rock");
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Rock" && getComputerChoice == "Paper")
    {
        alert("Computer Scores! Computer picked Paper}");
        computerScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

    if (getHumanChoice == "Rock" && getComputerChoice == "Scissors")
    {
        alert("Human Scores! Computer picked Scissors");
        humanScore += 1;
        alert("The current score is Human: " + humanScore + " " + "Computer: " + computerScore);
    }

}


function playGame()
{
    while (humanScore !== 5 || computerScore !== 5)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        if (humanScore == 5)
        {
            return "Human Wins, Current score is " + "Human: " + humanScore + " Computer: " + computerScore
        }

        if (computerScore == 5)
        {
            return "Computer wins, Current score is " + "Human: " + humanScore + " Computer: " + computerScore
        }
    }
}

//Play Game
alert(playGame())
