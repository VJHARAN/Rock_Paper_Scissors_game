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

function playRound(humanChoice,computerChoice){
     
   humanChoice=humanChoice.toLowerCase();
   console.log("You lose! Paper beats Rock");

   
}
 

let computerChoice=getComputerChoice();
let humanChoice=getHumanChoice();
console.log('computer :'+computerChoice+'\n'+'human :'+humanChoice);
const humanScore=0;
const computerScore=0;

playRound(humanChoice,computerChoice);