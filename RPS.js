let compScore=0;
let userscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usrscorePara=document.querySelector("#user-score");
const comscorePara=document.querySelector("#comp-score");

const genCompChoice= () => {
    const options=["Rock", "Paper", "Scissor"];
    const randomIdx=Math.floor(Math.random() * 3);    //Math.random() * 3 -> This produces random number till 2.99 ,  Math.floor -> This removes decimal points from Math.random
    return options[randomIdx];
}



const drawGame=() => {
    console.log("The game was Draw.")
    msg.innerText="The Game was Draw.";
    msg.style.backgroundColor="#081b31";
}



const showWinner=(userWin, userchoice, CompChoice) => {
    if(userWin===true){
        userscore++;
        usrscorePara.innerText=userscore;
        msg.innerText=`You win!! Your ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green"; 
    }
    else{
        compScore++;
        comscorePara.innerText=compScore;
        msg.innerText=`You Lost. ${CompChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}



const playGame=(userchoice) => {
    console.log("user choice =", userchoice);
    const CompChoice= genCompChoice();
    console.log("computer choice =", CompChoice);

    if(userchoice === CompChoice){
        drawGame();
    }
    else{
       let userWin=true;
        if(userchoice==="Rock"){
            //paper , scissor
           userWin= CompChoice==="Paper" ? false : true;
         }
         else if(userchoice==="Paper"){
            //Rock , Scissor
        userWin = CompChoice==="Rock" ? true : false; 
         }
         else{
            //Rock , Paper
            userWin = CompChoice==="Rock" ? false : true;
         }
         showWinner(userWin, userchoice, CompChoice);
    }
}



choices.forEach((choice => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    })
}))