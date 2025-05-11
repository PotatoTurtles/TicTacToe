const ticTac = [...document.querySelectorAll(".tacBody")];

const xPoints = document.querySelector(".xPoints");
const xTurn = document.querySelector(".xTurn");
xTurn.textContent="X's Turn";

const oPoints = document.querySelector(".oPoints");
const oTurn = document.querySelector(".oTurn");

const buttons = document.querySelectorAll("button");




console.log(ticTac);

let game = (function(){
    let previousPlay = 2;
    let currentBoard = ["","","","","","","","",""]
    let hasWon = false;
    let playerOne = (function(){
        let score = 0;
        let symbol = "X";
        let plusScore = function(){
            score++;
        }
        let getSymbol= function(){
            return symbol
        }
        let setSymbol= function(given){
            symbol = given;
        }
        let getScore= function(){
            return score
        }
        return{getScore, getSymbol, setSymbol, plusScore}
    })();
    let playerTwo = (function(){
        let score = 0;
        let symbol = "O";
        let plusScore = function(){
            score++;
        }
        let getSymbol= function(){
            return symbol
        }
        let setSymbol= function(given){
            symbol = given;
        }
        let getScore= function(){
            return score
        }
        return{getScore, getSymbol, setSymbol, plusScore}
    })();
    let getWin = function(){
        if(hasWon){
            return true
        }
        else{
            if(currentBoard[0]==currentBoard[1]&&currentBoard[1]==currentBoard[2]&&currentBoard[0]!=""){
                if(currentBoard[0]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[0]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[3]==currentBoard[4]&&currentBoard[4]==currentBoard[5]&&currentBoard[3]!=""){
                if(currentBoard[3]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[3]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[6]==currentBoard[7]&&currentBoard[7]==currentBoard[8]&&currentBoard[6]!=""){
                if(currentBoard[6]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[6]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[0]==currentBoard[3]&&currentBoard[3]==currentBoard[6]&&currentBoard[0]!=""){
                if(currentBoard[0]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[0]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[1]==currentBoard[4]&&currentBoard[4]==currentBoard[7]&&currentBoard[1]!=""){
                if(currentBoard[1]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[1]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[2]==currentBoard[5]&&currentBoard[5]==currentBoard[8]&&currentBoard[2]!=""){
                if(currentBoard[2]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[2]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[0]==currentBoard[4]&&currentBoard[4]==currentBoard[8]&&currentBoard[0]!=""){
                if(currentBoard[0]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[0]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
                
            }
            if(currentBoard[2]==currentBoard[4]&&currentBoard[4]==currentBoard[6]&&currentBoard[2]!=""){
                if(currentBoard[2]==1){
                    playerOne.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Won!";
                    oTurn.textContent="Player O Lost";
                    return true
                }
                else if(currentBoard[2]==2){
                    playerTwo.plusScore();
                    hasWon=true;
                    xTurn.textContent="Player X Lost";
                    oTurn.textContent="Player O Won!";
                    return true
                }
            }
            if(currentBoard.filter((index)=>index=="").length<=0){
                xTurn.textContent="Player X Tied";
                oTurn.textContent="Player O Tied";
                hasWon=true;
                return true
            }
        }
        return false
    }
    let displayBoard = function(){
        for(let i = 0; i<ticTac.length;i++){
            if(currentBoard[i]=="1"){
                ticTac[i].textContent=playerOne.getSymbol();
            }
            else if(currentBoard[i]=="2"){
                ticTac[i].textContent=playerTwo.getSymbol();
            }
            else{
                ticTac[i].textContent="";
            }
        }
    }
    let addPlay=function(place){
        if(!getWin()){
            if(currentBoard[place]==""){
                if(previousPlay==2){
                    currentBoard[place]=1;
                    previousPlay=1;
                    xTurn.textContent="";
                    oTurn.textContent="O's Turn";
                }
                else{
                    currentBoard[place]=2;
                    previousPlay=2;
                    xTurn.textContent="X's Turn";
                    oTurn.textContent="";
                }
                console.log(currentBoard);
                displayBoard();
            }
        }
        if(getWin()){
            console.log(playerTwo.getScore());
            displayBoard();
        }
        xPoints.textContent=`X's Points: ${playerOne.getScore()}`;
        oPoints.textContent = `O's Points: ${playerTwo.getScore()}`;
        
    }
    let changeSymbol=function(num, changeTo){
        if(num==1){
            playerOne=changeTo;
        }
        else{
            playerTwo=changeTo;
        }
    }
    let gameReset=function(){
        previousPlay = 2;
        currentBoard = ["","","","","","","","",""];
        displayBoard();
        hasWon=false;
    }
    //remember to make it so they can't override previously places symbols
    return{getWin, displayBoard, addPlay, changeSymbol, gameReset}
})();

for(let i=0;i<ticTac.length;i++){
    ticTac[i].addEventListener('click',()=>game.addPlay(i));
}
buttons.forEach((index)=>index.addEventListener('click',()=>game.gameReset()));

