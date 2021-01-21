var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabetArr){
    var realArr = []

    var uppercaseAlphabet = alphabet.toUpperCase()
// console.log(uppercaseAlphabet)
alphabetArr = uppercaseAlphabet.split('')
// console.log(alphabetArr)
    for (let p = 0; p < people.length; p++){
        realArr.push(people[p] + ':')
        for (let a = 0; a < alphabetArr.length; a++){
            realArr.push(alphabetArr[a])
        }
    } 
    console.log(realArr)
    return realArr
}
forception(people, alphabet)