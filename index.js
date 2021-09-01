"use strict";
const prompt = require('prompt-sync')();
const { getBalance } = require("./atm");
const { withdrawAmount } = require("./atm");
const { depositAmount } = require("./atm");
const { validatePin } = require("./atm");
const {pinNum} = require("./account");

//validation function
function integers(input){ 
    if(parseInt(input)){
      return true;
    }
    else{
      return false;
    }
}

//Calls pin validation and pushes to main menu if valid. 
function inputPin(){
    let correctPin = validatePin(pinNum);
    if (correctPin === true){
        mainMenu();
    }
    else{
        return inputPin();
    }
}

//Main menu selector.
function mainMenu(){
    let keyEnter = prompt("Which would you like to do? \n1: Check Balance.\n2: Deposit Funds\n3: Withdraw Funds\n4: Exit.", integers);
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
            process.exit(0); //kills the loop and allows the code to exit
            break;
        default:
        console.log("Wrong user input, please try again\n");
        mainMenu();
        break;
    }
}

inputPin();