#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n \t Welcome to Yousuf's Currency exchange \n"));
console.log(chalk.green("'Note' : Our base currency is USD"));
console.log(chalk.red("All currency values are set according to USD value"));

let currency:any={
    USD:1,
    EUR:0.92,
    INR:74,
    KWD:0.30,
    SAR:3.70,
    PKR:280
}


let answer=await inquirer.prompt([
    {
    name:"from",
    message:"From",
    type:"list",
    choices:["USD","EUR","INR","KWD","PKR","SAR"]
},

{
    name:"to",
    message:"To",
    type:"list",
    choices:["USD","EUR","INR","KWD","PKR","SAR"]
},

{
    name:"amount",
    message:chalk.magenta("Enter amount to convert"),
    type:"number"
}
])

let fromAmount=currency[answer.from]
let toAMOUNT=currency[answer.to]
let amount=answer.amount
let baseAmount=amount/fromAmount
let convertedAmount=baseAmount*toAMOUNT

console.log(chalk.blueBright("Your from currency is " + fromAmount));
console.log(chalk.greenBright("Your to currency is " + toAMOUNT));

console.log(chalk.yellow("Your converted amount is "+ convertedAmount));