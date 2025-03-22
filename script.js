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
        playerScoreSpan.textContent=`Computer: ${computerScore}`;
        computerScoreSpan.textContent=` Player: ${humanScore}`   ;
        finalResult.textContent='';
        let winner=computerScore>humanScore?"COMPUTER":"PLAYER";
        if (computerScore>=5 || humanScore>=5){
            finalResult.textContent= `Final Winner: ${winner}`;
            round.textContent='< GAME OVER >';
            computerScore=humanScore=0;
        }
         
        
    }
        
    

    let humanScore=0;
    let computerScore=0;
    const container=document.querySelector('#container');
    const btn=document.querySelectorAll('button');
    const div=document.querySelector('#subdiv');
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
    const computerScoreSpan=document.createElement('span');
    const playerScoreSpan=document.createElement('span');
    div.appendChild(round);
    div.appendChild(score);
    div.appendChild(finalResult);
    

    score.appendChild(computerScoreSpan);
    score.appendChild(playerScoreSpan);
    container.style.cssText="display:flex ; flex-direction :column;align-items:center; justify-content:center; gap:20px; height:500px; ";
    btn.forEach((button)=>{
        button.style.cssText="width:150px; height:50px; margin:20px; border:2px solid  #8874cc; border-style:outset; border-radius:20px; font-size:20px; font-weight:600; background:#b5abe2; color:#4f4477;";
    });
    div.style.cssText="text-align:center;padding:10px 10px;width:520px; height:auto; margin:20px; border:2px solid  #8874cc; border-radius:8px; font-size:20px; font-weight:600; background:#bc5090; color:#000;";
    finalResult.style.cssText="color:white; font-weight:700; font-size:40px;"  ;
    round.style.cssText="color:white; font-weight:800; font-size:30px;  "  ;
     
    document.body.style.background="#b8e0d4";
    score.style.cssText="display:flex; align-items:center; justify-content:center; gap:30px; font-weight:900; font-size:25px;";
}


playGame();


