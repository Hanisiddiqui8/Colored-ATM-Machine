#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    //Initiating user balance and pin code
    let myBalance = 10000;
    let myPin = 4413;
    //Print welcome message
    console.log(chalk.bgMagenta.bold("\n \tWelcome to Code With Hani - ATM Machine\n"));
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin number:"
        }
    ]);
    //If & Else statements
    if (pinAnswer.pin === myPin) {
        console.log(chalk.bgYellow("\nThe Pin is correct, login is successful\n"));
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "select an operation",
                choices: ["Withdraw Amount", "Balance Inquiry"]
            }
        ]);
        // Added 'else' block here
        if (operationAns.operation === "Withdraw Amount") {
            let withdrawAns = await inquirer.prompt([
                {
                    name: "withdrawMethod",
                    type: "list",
                    message: "select a withdrawal method",
                    choices: ["Fast Cash", "Enter Your Amount"]
                }
            ]);
            if (withdrawAns.withdrawMethod === "Fast Cash") {
                let fastCashAns = await inquirer.prompt([
                    {
                        name: "fastCash",
                        type: "list",
                        message: "Select the amount:",
                        choices: [1000, 2000, 5000, 50000],
                    }
                ]);
                if (fastCashAns.fastCash > myBalance) {
                    console.log(chalk.red("Insufficient Balance"));
                }
                else {
                    myBalance -= fastCashAns.fastCash;
                    console.log(`${fastCashAns.fastCash} Withdrawal Successful`);
                    console.log(`Your Remaining Balance Is: ${myBalance}`);
                }
            }
            // Added 'else if' block here
            else if (withdrawAns.withdrawMethod === "Enter Your Amount") {
                // Add your code here
            }
        }
        else {
            console.log("Invalid operation selected");
        }
    }
    else {
        console.log(chalk.red("The Pin You Entered Is Incorrect, Please Try Again"));
    }
}
main(); //call the main function to start the program
