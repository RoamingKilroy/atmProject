"use strict";
const prompt = require('prompt-sync')();
const account = require('./account');
const {balance} = require("./account");
const {pinNum} = require("./account");
console.log(pinNum);

function getBalance(){
    console.log(balance)
}

function withdrawAmount(amount){
    let newBalance = balance - amount;
    console.log(newBalance);
}

function depositAmount(amount){
    let depositAmount = balance + amount;
    console.log(depositAmount);
}

function validatePin(){
   let pinEntered = prompt("Please enter your pin.");
   if(pinEntered == account.pinNum){
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
