let userChoice = null
let compChoice = null
let userScore = 0
let computerScore = 0
let b1 = document.getElementById('b1'), b2 = document.getElementById('b2'), b3 = document.getElementById('b3');
b1.onclick = () => {userChoice = 'rock'; userInp(userChoice);}
b2.onclick = () => {userChoice = 'paper'; userInp(userChoice);}
b3.onclick = () => {userChoice = 'scissors'; userInp(userChoice);}
let userChoiceSpan = document.getElementById('playerChoice'), compChoiceSpan = document.getElementById('compChoice');
let userScoreSpan = document.getElementById('playerScore'), compScoreSpan = document.getElementById('compScore');

function userInp(userChoice) {
    const compChoices = ['rock','paper','scissors']
    compChoice = Math.floor(Math.random() * compChoices.length);
    switch (userChoice) {
        case 'rock':
            switch (compChoice) {
                case 1:
                    // tie - rock
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "rock";
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 2:
                    // lose - paper
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "paper";
                    userScore = --userScore;
                    computerScore = ++computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 3:
                    // win - scissors
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "scissors";
                    userScore = ++userScore;
                    computerScore = --computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                default:
                    break;
            }
            break;
        case 'paper':
            switch (compChoice) {
                case 1:
                    // win - rock
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "rock";
                    userScore = ++userScore;
                    computerScore = --computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 2:
                    // tie - paper
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "paper";
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 3:
                    // lose - scissors
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "scissors";
                    userScore = --userScore;
                    computerScore = ++computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                default:
                    break;
            }
            break;
        case 'scissors':
            switch (compChoice) {
                case 1:
                    // lose - rock
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "rock";
                    userScore = --userScore;
                    computerScore = ++computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 2:
                    // win - paper
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "paper";
                    userScore = ++userScore;
                    computerScore = --computerScore;
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                case 3:
                    // tie - scissors
                    userChoiceSpan.innerHTML = userChoice;
                    compChoiceSpan.innerHTML = "scissors";
                    userScoreSpan.innerHTML = userScore;
                    compScoreSpan.innerHTML = computerScore;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}