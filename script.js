// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10 + 1);

// Count the number of guesses
let guessCount = 1;

// Get the status message container
let statusMessage = document.getElementById("statusMessage");

document.getElementById("submitguess").onclick = function () {

    // Get the user's guessed number
    let userGuess = document.getElementById("guessField").value;

    // If the guessed number is correct
    if (userGuess == randomNumber) {
        statusMessage.textContent = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guessCount + " GUESS!";
        statusMessage.className = "correct"; // Set status text to green
    }

    // If the guessed number is greater than the random number
    else if (userGuess > randomNumber) {
        guessCount++;
        statusMessage.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER.";
        statusMessage.className = "wrong"; // Set status text to red
    }

    // If the guessed number is less than the random number
    else {
        guessCount++;
        statusMessage.textContent = "OOPS SORRY!! TRY A GREATER NUMBER.";
        statusMessage.className = "wrong"; // Set status text to red
    }
};
