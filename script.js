function getComputerChoice(){
    let choice = Math.random();
    let choiceTrans;
    if(choice>0 && choice<=0.3){
        choiceTrans="rock"
    }
    else if(choice>0.3 && choice<=0.6){
        choiceTrans="paper";
    }
    else if(choice>0.6 && choice<=1){
        choiceTrans="scissors";
    }
    return choiceTrans;
}
let getHumanChoice=()=>{
    let choice = prompt("Select one: ROCK, PAPER, SCISSORS").toLowerCase();
    return choice; 
}

let humanScore=0;
let Cscore=0;
let rounds=0;
/*computer choice >0 and <=0.3(ROCK).. >0.3 and<=0.6(PAPER)
and if >0.6 and <1 (SCISSORS)*/

let playRound=()=>{
    const CC=getComputerChoice();
    const HC=getHumanChoice();
    if(CC==HC){
        alert("Draw");
    }
    else if(CC=="rock" && HC=="scissors"){
        Cscore+=1;
        alert("Computer won the round");
    }
    else if(CC=="scissors" && HC=="paper"){
        Cscore+=1;
        alert("Computer won the round");
    }
    else if(CC=="paper" && HC=="rock"){
        Cscore+=1;
        alert("Computer won the round");
    }
    else{humanScore+=1;
        alert("You won the round");
    }
    rounds=rounds+1;
}
do {
    playRound();
} while (rounds<=4);

I