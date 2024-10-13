var playerScore = 0;
var computerScore = 0;
var winning_score = 10;
var currentUser = null;

function playGame(playerChoice) {
    const computerOptions = ['rock', 'paper', 'scissors'];

    // The computer randomly generates a rock, paper, or scissors
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("computerChoice").innerText = computerChoice;
    document.getElementById("playerPick").src = "images/" + playerChoice + ".gif";
    document.getElementById("computerPick").src = "images/" + computerChoice + ".gif";

    var result = "";

    // Determine the result of the game
    if (playerChoice === computerChoice) {
        result = "It's a tie! No one gets a point";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "The Player wins this round!";
        playerScore += 1;
    } else {
        result = "The computer wins this round!";
        computerScore += 1;
    }

    if (playerScore === winning_score && computerScore === winning_score) {
        // If both the player and computer score 10, it's a tie and a final round is needed
        result = "It is a tie, final round!";
        document.getElementById("face").src = "images/tie.gif";
    } else if (playerScore === winning_score) {
        result = '<span class="player-winner">The player is the final winner!</span>';
        document.getElementById("face").src = "images/win.gif";
        updateGamesWon();
        disableButtons();
        showRestartButton();
    } else if (computerScore === winning_score) {
        result = '<span class="computer-winner">You lost. The computer is the final winner!</span>';
        document.getElementById("face").src = "images/lost.gif";
        disableButtons();
        showRestartButton();
    }

    document.getElementById("gameResult").innerHTML = result; // allows html inside gameresult span
    updateScores();



}

function disableButtons() {
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;

}

function enableButtons() {
    document.getElementById("rockButton").disabled = false;
    document.getElementById("paperButton").disabled = false;
    document.getElementById("scissorsButton").disabled = false;
}


// Update all the page’s results so the user is aware of what happened.
function updateScores() {
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

// Using event listeners that will call the function with a parameter based on what button the player chooses
 document.addEventListener("DOMContentLoaded", function() { // ensuring all page content is loaded
     document.getElementById("rockButton").addEventListener("click", function() {
         playGame('rock');
     });

     document.getElementById("paperButton").addEventListener("click", function() {
         playGame('paper');
     });

     document.getElementById("scissorsButton").addEventListener("click", function() {
         playGame('scissors');
     });

     // event listener for the reset button
     document.getElementById("restartButton").addEventListener("click", function() {
         resetGame();
     });
 });

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    enableButtons() // allowing rock paper and scissors buttons to be used again
    document.getElementById("gameResult").innerText = "New game started!";
    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    // Image source: https://www.tenstickers-ireland.com/canvas-prints/vague-purple-flowers-flower-canvas-Q1582
    document.getElementById("playerPick").src="images/flowers.png"; // Placeholder flower image used in the meantime
    document.getElementById("computerPick").src="images/flowers.png"; // Placeholder flower image used in the meantime
    document.getElementById("face").src="images/versus.png"; // Placeholder versus image used in the meantime
    updateScores();
    hideRestartButton();
}

function hideRestartButton() { // hiding the button and text when the game is being played
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("restartText").style.display = "none";
}

function showRestartButton() {
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("restartText").style.display = "block";
}

document.getElementById('loginBtn').addEventListener('click', () => {
    netlifyIdentity.open(); // opens login modal
});

document.getElementById('signupBtn').addEventListener('click', () => {
    netlifyIdentity.open();
});

netlifyIdentity.init(); // starting the Netlify identity widget

netlifyIdentity.on('login', (user) => { // event listener
    if (user) {
        const username = user.user_metadata.full_name || user.email;
        location.reload(); // forcing reload of page
        document.getElementById('welcome-message').style.display = 'none';
        document.getElementById('username').innerText = username;

        document.getElementById('play-game-link').style.display = 'block';
    }
});
