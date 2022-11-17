let  turn = 0, playerOneScore = 0, playerTwoScore = 0
const playerOneDice = document.getElementById(`playerOneDice`), playerTwoDice = document.getElementById(`playerTwoDice`);
const playerOneArea = document.getElementById(`playerOneArea`), playerTwoArea = document.getElementById(`playerTwoArea`);

function rollOne() {
    let roll = Math.ceil(6*Math.random())
    switch (roll){
        case 1:playerOneDice.src="../Dice1.png";break;
        case 2:playerOneDice.src="../Dice2.png";break;
        case 3:playerOneDice.src="../Dice3.png";break;
        case 4:playerOneDice.src="../Dice4.png";break;
        case 5:playerOneDice.src="../Dice5.png";break;
        case 6:playerOneDice.src="../Dice6.png";break;
    }
    console.log(roll)
    return roll
}
function rollTwo() {
    let roll = Math.ceil(6*Math.random())
    switch (roll){
        case 1:playerTwoDice.src="../Dice1.png";break;
        case 2:playerTwoDice.src="../Dice2.png";break;
        case 3:playerTwoDice.src="../Dice3.png";break;
        case 4:playerTwoDice.src="../Dice4.png";break;
        case 5:playerTwoDice.src="../Dice5.png";break;
        case 6:playerTwoDice.src="../Dice6.png";break;
    }
    console.log(roll)
    return roll
}
function nextTurn() {
    switch (turn){
        case 1: playerOneArea.className="active-player", playerTwoArea.className="inactive-player";turn--;break;
        case 0: playerTwoArea.className="active-player", playerOneArea.className="inactive-player";turn++;break;
    }
}
function resetGame() {
    turn=0;
    playerOneArea.className="active-player";
    playerTwoArea.className="inactive-player";
    playerOneScore=0;
    document.getElementById(`playerOneScore`).innerText=`${playerOneScore}`;
    playerTwoScore=0;
    document.getElementById(`playerTwoScore`).innerText=`${playerTwoScore}`;
    playerOneDice.src="../NoDice.png";
    playerTwoDice.src="../NoDice.png";
    document.getElementById(`gameHeader`).innerText="Let the games begin once more!";
}

function rollBtn() {
    switch (turn){
        case 0:{
            playerRoll=rollOne();
            if (playerRoll==1){playerOneScore=0;nextTurn()}
            else {playerOneScore+=playerRoll;};
            document.getElementById(`playerOneScore`).innerText=`${playerOneScore}`;
            if (playerOneScore>=20){document.getElementById(`gameHeader`).innerText=`Player 1 wins!`};
            break;}
        case 1:{playerRoll=rollTwo();
            if (playerRoll==1){playerTwoScore=0;nextTurn();}
            else {playerTwoScore+=playerRoll};
            document.getElementById(`playerTwoScore`).innerText=`${playerTwoScore}`;
            if (playerTwoScore>=20){document.getElementById(`gameHeader`).innerText=`Player 2 wins!`};
            break;}
        }
}

document.getElementById(`rollButton`).addEventListener(`click`, ()=>{rollBtn()});
document.getElementById(`holdButton`).addEventListener(`click`, ()=>{nextTurn()});
document.getElementById(`resetButton`).addEventListener(`click`, ()=>{resetGame()});