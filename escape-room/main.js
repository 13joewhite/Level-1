const readline = require("readline-sync");


const player = readline.question("What is your name? ");
console.log(player + ', we welcome you to The Room. ')


let alive = true


let answer = {
    option1: '1',
    option2: '2',
    option3: '3'
};


let prompt = readline.question("You have three choices within these walls. Pick wisely, or pay the price. HIT RETURN");
console.log('1. Put your hand in a hole.\n2. Find the hidden key.\n3. Open the door.')


let realAnswer = readline.question('Choose your option. ')
console.log(realAnswer)


while (alive) {
    if (realAnswer == answer.option1) {
        var dead = readline.question('You are dead.') 
    } else if (realAnswer == answer.option2) {
        var move2 = readline.question('You have found the key! What does it go to? ')
        if(move2 == answer.option3){
            var win = readline.question('You have made it out alive!\nHit control C to start over!')
        }
    } else if (realAnswer == answer.option3) {
        var oops = readline.question('Door is locked without a key.\nHit return to try again ')
        realAnswer = readline.question('Choose your option. ')
    } else {
        alive = false
    }
}
var endNote = readline.question('Hit control C to start over!')
console.log(endNote)
