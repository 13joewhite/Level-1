var readlineSync = require("readline-sync");

function add(num1, num2){
    return num1 + num2;
} 

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, opp){
    switch(opp) {
        case 'add': 
            return add(num1, num2)
            break;
        case 'sub':
            return sub(num1, num2)
            break;
        case 'mul':
            return mul(num1, num2)
            break;
        case 'div':
            return div(num1, num2)
            break;
        default:
            return null
}
}

var num1 = readlineSync.question('Please enter your first number! ');
console.log(num1);
var num2 = readlineSync.question('Please enter your second number! ');
console.log(num2);
var opp = readlineSync.question('Please enter the opperation! ');
console.log(opp)
calculator(num1, num2, opp)
var answer = calculator(num1, num2, opp);
console.log(answer);