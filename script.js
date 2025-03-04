function getComputerChoice(){
    const choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0:  return "rock";
        case 1:  return"paper";
        case 2:  return 'scissors';
    }
}

function getHumanChoice(){
    const userInput=prompt("Enter your choice (rock/paper/scissors) : ")
    return userInput;
}



function playGame(){
    
    function playRound(humanChoice,computerChoice,round){
        humanChoice=humanChoice.toLowerCase();
        if ((humanChoice=='rock'&& computerChoice=='scissors')||
            (humanChoice=='scissors'&& computerChoice=='paper')||
            (humanChoice=='paper'&& computerChoice=='rock')){
                console.log(`Round${round} winner: USER! \t ${humanChoice} beats ${computerChoice}`);
                humanScore+=1;
            }
        else if(humanChoice===computerChoice){
            console.log(`Round ${round} was a Tie!`);
        }
        else {
            console.log(`Round ${round} winner: COMPUTER! \t ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        }                
    }    

    let humanScore=0;
    let computerScore=0;
    for(let i=1;i<=5;i++){
        let computerSel=getComputerChoice();
        let humanSel=getHumanChoice();
        playRound(humanSel,computerSel,i);
    }

    let winner;
    if (humanScore>computerScore)
        winner='USER';
    else if (humanScore==computerScore)
        console.log("Game is a Tie!");
        winner='NONE'
    else
        winner='COMPUTER';
    console.log(`Final Score ==> User:${humanScore}\t Computer:${computerScore}`);
    console.log(`Winner: ${winner}`);
}

playGame();


