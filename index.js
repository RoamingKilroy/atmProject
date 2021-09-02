"use strict";
const prompt = require('prompt-sync')();
const { getBalance, withdrawAmount, depositAmount,validatePin } = require("./atm");

//validation function
function integers(input){ 
    if(parseInt(input)) return true;
    else return false;
}

//Calls pin validation and pushes to main menu if valid. 
function inputPin(){
    let correctPin = validatePin();
    if (correctPin === true)mainMenu(); //ternary
    else return inputPin();
}

//Main menu selector.
function mainMenu(){
    console.log("Which would you like to do? \n1: Check Balance.\n2: Deposit Funds\n3: Withdraw Funds\n4: Exit.");
    let keyEnter = prompt("",integers)
    switch(keyEnter){
        case '1':
            getBalance();
            mainMenu();
            break;
        case "2":
            depositAmount(parseInt(prompt("Deposit Amount?")));
            mainMenu();
            break;
        case "3":
            withdrawAmount(parseInt(prompt("Withdrawal Amount?")));
            mainMenu();
            break;
        case "4":
            console.log("Thank you for being a loyal customer!")
            break;
        default:
            console.log("Wrong user input, please try again\n");
            mainMenu();
            break;
    }
}

inputPin();