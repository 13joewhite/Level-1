const readline = require(`readline-sync`)


const playerName = readline.question(`Welcome to China-Town. What is your name lone traveler? Enter your name then press enter:
`)
console.log(`${playerName}, it is good to have you here. Do your best to survive. NOW BEGIN WALKING. `)
let walking = readline.question(`Enter "W" to walk. Then press enter  `)

const monsters = [`Clyde the Cyclopse`, `Bryan the Bigfoot`, `Gerald the Ghost`]
const monsterAttack = 2


let player = {
    name: playerName,
    health: 2500,
    inventory: 0
}
 
while(walking.toUpperCase() == `W`) {
   const random = Math.floor(Math.random() * 4)
   if(random === monsterAttack) {
       const attackingMonster = monsters[Math.floor(Math.random() * 3)]
       readline.question(`${attackingMonster} is attacking! PRESS ENTER`)
       const attackOrRun = readline.question(`Enter "A" to attack or "R" to run. Then press enter  `)


        if(attackOrRun.toUpperCase() == `A`) {
            const monsterDamage = Math.floor(Math.random() * 1000)
            const playerDamage = Math.floor(Math.random() * 1000)


            if(monsterDamage >= 750) {
                player.health += 300
                player.inventory += 25
                const print = readline.question(`You killed the monster and got 300 health points. Your health points are currently ${player.health}. You also received 25 Gold. Your gold total is ${player.inventory}. Enter "P" or "Print" to view attributes. PRESS ENTER TO CONTINUE  `)

                if(print.toUpperCase() == `P` || print.toUpperCase() == `PRINT`) {
                    readline.question(`${player.name} you have ${player.health} HP, and your inventory has ${player.inventory} gold. Keep up the good work. HIT ENTER TO CONTINUE  `)
                } 



            } else {
                player.health -= playerDamage
                
                if(player.health <= 0) {
                    readline.question(`You died. Be stronger dummy. PRESS ENTER  `)
                    readline.question(`Hit control C to start over. `)
                }else {
                    readline.question(`You dealt ${monsterDamage} damage to ${attackingMonster} and ${attackingMonster} dealt ${playerDamage} leaving you with ${player.health} HP.
                    The monster ran away. PRESS ENTER `)

                }
            }
        } else if(attackOrRun.toUpperCase() == `R`) {
            const run = Math.floor(Math.random() * 2)
            const failedToRun = Math.floor(Math.random() * 1000)

            if(run == 0){
                readline.question(`You got away from ${attackingMonster}. Press enter to continue. `)
            } else {
                player.health -= failedToRun

                if(player.health <= 1) {
                    readline.question(`You died. Be stronger dummy. PRESS ENTER  `)
                    readline.question(`Hit control C to start over. `)
                }else {
                    readline.question(`You suck at running and took ${failedToRun} damage. Your player health is now at ${player.health}  `)
                }            
            }

        } else {
            readline.question(`Enter "A" to attack or "R" to run. Then press enter `)
        }
   } else {
    walking = readline.question(`Enter "W" to walk. Then press enter `)
    console.log(walking)
    
    if(walking.toUpperCase() !== `W`) {
    walking = readline.question(`OOPS! You didn't type "W". Please enter "W" and press enter. `)
}
   }
}

