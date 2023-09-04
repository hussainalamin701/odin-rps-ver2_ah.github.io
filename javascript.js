const playerScorePara = document.getElementById("playerScore");
let playerScoreVal = 0;
const computerScorePara = document.getElementById("computerScore");
let computerScoreVal = 0;

const scissorBtn = document.getElementById("Scissor");
const paperBtn = document.getElementById("Paper");
const rockBtn = document.getElementById("Rock");

const player_icon = document.getElementById("player-icon");
const player_choice = document.getElementById("player-choice");

const computer_icon = document.getElementById("computer-icon");
const computer_choice = document.getElementById("computer-choice");

let winOrLose = 'Blank';

let computerSelection = ['Rock','Paper','Scissor'];

let temp_comp_choice = '';
let temp_play_choice = '';
// Make the computers choice of value

playerScorePara.innerHTML = `Player Score : ${playerScoreVal}`;
computerScorePara.innerHTML = `Computer Score : ${computerScoreVal}`;

player_choice.textContent = `Player Chose : ${temp_play_choice}`;
computer_choice.textContent = `Computer Chose : ${temp_comp_choice}`;

document.getElementById("win-lose-text").innerHTML = winOrLose;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(computerChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if(choiceNum === 0){
        computerChoice = 'Rock';
    }else if(choiceNum === 1){
        computerChoice = 'Paper';
    }else if(choiceNum === 2){
        computerChoice = 'Scissor';
    }
    return computerChoice;
}

function checkWinner(){
    if(playerScoreVal === 5){
        playerScoreVal = 0;
        computerScoreVal = 0;
        computerScorePara.innerHTML = "You Lost";
        player_choice = 'Blank';
        computer_choice = '';
        playerScorePara.innerHTML = `Player Chose : ${player_choice}`;
        computerScorePara.innerHTML = `Computer Chose : ${computer_choice}`;
        document.getElementById("win-lose-text").innerHTML = 'Blank';
        alert("Player Wins");

    }else if(computerScoreVal === 5){
        playerScoreVal = 0;
        computerScoreVal = 0;
        playerScorePara.innerHTML = "You Lost";
        player_choice = 'Blank';
        computer_choice = '';
        playerScorePara.innerHTML = `Player Chose : ${player_choice}`;
        computerScorePara.innerHTML = `Computer Chose : ${computer_choice}`;
        document.getElementById("win-lose-text").innerHTML = 'Blank';
        alert("Computer Wins");
        
    }
}

function compare(playerSelection, computerSelection){
    if(
        (playerSelection == "Rock" && computerSelection == "Scissor") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissor" && computerSelection == "Paper")
        ){
        updateText();
        winOrLose = 'Player Wins';
        document.getElementById("win-lose-text").innerHTML = winOrLose;
        updateText();

        playerScoreVal++;
        playerScorePara.innerHTML = `Player Score : ${playerScoreVal}`;

    }else if(playerSelection === computerSelection){
        updateText();
        winOrLose = 'Tie';
        document.getElementById("win-lose-text").innerHTML = winOrLose;
        updateText();

        console.log("Tie");
    }
    else{
        updateText();
        winOrLose = 'Computer Wins';
        document.getElementById("win-lose-text").innerHTML = winOrLose;
        updateText();

        computerScoreVal++;
        computerScorePara.innerHTML = `Computer Score : ${computerScoreVal}`;
    }
}

function buttonRock(){
    updateText();
    let abx = computerPlay(temp_comp_choice);
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${abx}`;
    temp_play_choice = document.getElementById("Rock").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`

    updateIcons(temp_play_choice,abx);
    compare(temp_play_choice, abx);
    checkWinner();
    updateText();
    console.log('Not Working!');
}

function buttonPaper(){
    updateText();
    let abx = computerPlay(temp_comp_choice);
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${abx}`;
    temp_play_choice = document.getElementById("Paper").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`
   
    updateIcons(temp_play_choice,abx);
    compare(temp_play_choice, abx);
    checkWinner();
    updateText();
}

function buttonScissor(){
    updateText();
    let abx = computerPlay(temp_comp_choice);
    document.getElementById("computer-choice").innerHTML = `Computer Chose : ${abx}`;
    temp_play_choice = document.getElementById("Scissor").id;
    document.getElementById("player-choice").innerHTML = `Player Chose : ${temp_play_choice}`

    updateIcons(temp_play_choice,abx);
    compare(temp_play_choice, abx);
    checkWinner();
    updateText();
}

function updateText(){
    document.getElementById("win-lose-text").innerHTML = winOrLose;
}

function updateIcons(playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            player_icon.textContent = '✊';
            break;
        case 'Paper':
            player_icon.textContent = '✋';
            break;
        case 'Scissor':
            player_icon.textContent = '✌';
            break;
    }

    switch(computerSelection){
        case 'Rock':
            computer_icon.textContent = '✊';
            break;
        case 'Paper':
            computer_icon.textContent = '✋';
            break;
        case 'Scissor':
            computer_icon.textContent = '✌';
            break;
    }
}

rockBtn.addEventListener("click", buttonRock);
paperBtn.addEventListener("click", buttonPaper);
scissorBtn.addEventListener("click", buttonScissor);
