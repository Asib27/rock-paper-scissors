playerPlay = ()=>{
    return prompt("Enter rock, paper or scissors").toLowerCase();
}

let chooseFrom = ['rock', 'paper', 'scissors'];
computerPlay = ()=>{
    let choice = Math.floor(Math.random() * 3);
    return chooseFrom[choice];
}

playRound = (playerSelection, computerSelection)=>{
    playerIdx = chooseFrom.indexOf(playerSelection);
    computerIdx = chooseFrom.indexOf(computerSelection);

    if((playerIdx + 1) % chooseFrom.length == computerIdx){
        return 1; // computer wins
    }
    else if(playerIdx == computerIdx) return 0; // tie
    else{
        return -1;
    }
}

play = (no_of_games)=>{
    let computerWin = 0;
    let playerWin = 0;

    for(let i =0; i < no_of_games; i++){
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();

        let result = playRound(playerChoice, computerChoice);
        if(result == 1){
            computerWin++;
            console.log('Computer Wins, ', computerChoice, 'beats', playerChoice);
        }
        else if(result == -1){
            playerWin++;
            console.log('Player Wins, ', playerChoice, 'beats', computerChoice);
        }
        else{
            console.log(`Its a tie: ${computerChoice} ${playerChoice} ties`);
            i--;
        }

        console.log("Current Score : player ", playerWin, " - ", computerWin, "computer")
    }

    if(computerWin > playerWin){
        console.log(`Computer wins by ${computerWin} - ${playerWin}`)
    }else{
        console.log(`Player wins by ${playerWin} - ${computerWin}`)
    }
}

//play(5);

choiceClicked = (event)=>{
    console.dir(event.target);
    console.dir(event.target.parentElement.classList[0]);

    if(event.target.parentElement.classList[0] != 'card')
        event.target.classList.add('selected');
    else
        event.target.parentNode.classList.add('selected');
}

choices = Array.from(document.querySelectorAll('#choose-section div.card'))
choices.forEach(el=> el.addEventListener('click', choiceClicked))