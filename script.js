function getComputerChoice(){
    const choice=Math.floor(Math.random()*3);
    switch(choice){
        case 0:  return "rock";
        case 1:  return"paper";
        case 2:  return 'scissors';
    }
}

// function getHumanChoice(){
//     const userInput=prompt("Enter your choice (rock/paper/scissors) : ")
     
//     return userInput;
// }



function playGame(){
    
    function playRound(humanChoice,computerChoice ){
     
        humanChoice=humanChoice.toLowerCase();
        if ((humanChoice=='rock'&& computerChoice=='scissors')||
            (humanChoice=='scissors'&& computerChoice=='paper')||
            (humanChoice=='paper'&& computerChoice=='rock')){
                divText=`USER won! \t ${humanChoice} beats ${computerChoice}`;
                humanScore+=1;
                
            }
        else if(humanChoice===computerChoice){
            divText=`Game Tie!`;
        }
        else {
            divText=`COMPUTER won! \t ${computerChoice} beats ${humanChoice}`;
            computerScore+=1;
        }   
        console.log(divText);       
        round.textContent=divText;
        score.textContent=`Computer: ${computerScore}\n Player: ${humanScore}`   ;
        finalResult.textContent='';
        let winner=computerScore>humanScore?"COMPUTER":"PLAYER";
        if (computerScore>=5 || humanScore>=5){
            finalResult.textContent= `Final Winner: ${winner}`;
            round.textContent='';
            computerScore=humanScore=0;
        }
         
        
    }
        
    

    let humanScore=0;
    let computerScore=0;
    const btn=document.querySelectorAll('button');
    const div=document.querySelector('div');
    const round=document.createElement('p');
    const score=document.createElement('p');
    let finalResult=document.createElement('p');
    let divText='';  
    
    btn.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            let targetBtn=e.target;
            let playerSelection=targetBtn.textContent;
            let computerSelection=getComputerChoice();
            playRound(playerSelection,computerSelection);
            
        })
    })
    div.appendChild(round);
    div.appendChild(score);
    div.appendChild(finalResult);
    
    
       
}


playGame();


