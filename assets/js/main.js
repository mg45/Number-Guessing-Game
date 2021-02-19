const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const winNumber = getRandomInt(101);
let userInputGuess = 22;

const createAttempList = (attemps) => Array.from(Array(attemps).keys());
//console.log(createAttempList(4)); // values 4, 5, 6 or custom;

let compareGuess = (userInputGuess) => {
    let attempUntilWin = 0;
    createAttempList(9999).forEach(function (attemp) { // for testing - highNumber;
        if (userInputGuess != winNumber && userInputGuess < winNumber) {
            console.log(`FAIL - try higher number - attemp: ${attemp} : ${userInputGuess} : WinNumber: ${winNumber}`);
            attempUntilWinFinal = attempUntilWin++;
            console.log(attempUntilWinFinal);
            userInputGuess = getRandomInt(101);
        } else if (userInputGuess != winNumber && userInputGuess > winNumber) {
            console.log(`FAIL - go down with the number - attemp: ${attemp} : ${userInputGuess} : WinNumber: ${winNumber}`);
            attempUntilWinFinal = attempUntilWin++;
            console.log(attempUntilWinFinal);
            userInputGuess = getRandomInt(101);
        } else {
            return [userInputGuess, winNumber];
        }
    });
    return [attempUntilWin, "WINNER:", userInputGuess, winNumber,];
}

console.log(compareGuess(userInputGuess)); 