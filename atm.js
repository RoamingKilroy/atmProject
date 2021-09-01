"use strict";
const prompt = require('prompt-sync')();
let {balance, pin} = require("./account");


function getBalance(){
    console.log("Your balance is " + balance)
}

function withdrawAmount(amount){
    let newBalance = balance - amount;
    balance = newBalance;
    console.log("Your new balance is " + newBalance);
}

function depositAmount(amount){
    let depositAmount = balance + amount;
    balance = depositAmount;
    console.log("Your new balance is " + depositAmount);
}

function validatePin(){
   let pinEntered = prompt("Please enter your pin.");
   if(pinEntered == pin){
    console.log("Correct pin entered.");
    return true;
    }
    return false;
}    


module.exports = {
    getBalance: getBalance,
    withdrawAmount: withdrawAmount,
    depositAmount: depositAmount,
    validatePin: validatePin,
}
