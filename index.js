import inquirer from "inquirer";
//  1) Computer will genrate a random number
//  2) User input from gussessing number
//  3) Campare user input with computer generated number and show result 
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guess a Number: ",
    }
]);
//console.log(answer);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
