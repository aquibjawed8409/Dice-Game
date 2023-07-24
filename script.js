// Get Constant
const playerWin = document.getElementById('playerwin')
const diceImage1 = document.getElementById("diceImage1")
const diceImage2 = document.getElementById("diceImage2")

// Function run on click event
function diceroll() {

    // Get Random Number
    const dice1No = Math.floor(Math.random() * 6) + 1;
    const dice2No = Math.floor(Math.random() * 6) + 1;

    // Get variable attribute for the Dice
    diceImage1.setAttribute('src', `Images/dice${dice1No}.png`)
    diceImage2.setAttribute('src', `Images/dice${dice2No}.png`)

    // Check which player is win
    if (dice1No > dice2No) {
        playerWin.innerText = "Player 1 Win"
    } else if(dice2No>dice1No){

        playerWin.innerText = "Player 2 Win"
    }else{
        playerWin.innerText = "Match Draw"

    }

}