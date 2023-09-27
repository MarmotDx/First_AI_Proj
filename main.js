const prompt = require("prompt-sync")();
let tmpGuess = 0;

let secretNumber = prompt("Pick a number between 1 and 100: ");

aiProgram();

function aiProgram() {

    // Define the range of possible numbers
    let guesses = 0
    let minNumber = 1;
    let maxNumber = 100;

    let newRange = [];

    for (let i=minNumber;i<maxNumber+1;i++) {
        newRange.push(i);
    }
        function makeFirstGuess(maxNumber,minNumber) {
            // Calculate the midpoint of the range
            const guess = Math.floor(((minNumber + maxNumber) / 2));
            
            // Display the AI's guess to the user
            console.log(`AI's guess is: ${guess}`);
            tmpGuess = guess;
        }

        makeFirstGuess(maxNumber,minNumber);
        feedbackLoop();

        

    //Ask the user whether the AI's guess is too high, too low, or correct.

    function feedbackLoop() {
        guesses++;
        console.log(tmpGuess);

        if (tmpGuess > secretNumber) {
            console.log("too high, kid!");
            newRange=[];

            for (let i=minNumber;i<tmpGuess;i++) {
                newRange.push(i)
            }
            maxNumber = newRange[newRange.length-1]
            minNumber = newRange[0]

            makeFirstGuess(maxNumber, minNumber);
            feedbackLoop();
        }
        
        else if (tmpGuess < secretNumber) {
            console.log("too low, kiddo!");
            newRange=[];

            for (let i=tmpGuess;i<maxNumber+1;i++) {
                newRange.push(i)
            }
            maxNumber = newRange[newRange.length-1]
            minNumber = newRange[0]

            makeFirstGuess(maxNumber, minNumber);
            feedbackLoop();
        }
        else { 
            console.log(`You got it kid.\n your total guesses were ${guesses}`)
            return;
        }


    }    

}
