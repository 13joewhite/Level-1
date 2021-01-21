// function capitalizeLowercase(str) {
//     // have a new variable made the string uppercase'
//     var uppercase = str.toUpperCase()
//     // and add it with the original string
//     console.log(uppercase + str)
//     return uppercase + str
// }
// capitalizeLowercase('dog')


// function problemTwo(str) {
//     var halfLength = Math.floor(str.length / 2)
//     console.log(halfLength)
// }
// problemTwo('Ashlee')

function problemThree(str){
    var firstHalf = str.slice(0, str.length / 2)
    console.log(firstHalf)
}
problemThree('ashlee')


function problemFour(str){
    var halfOne = str.slice(0, str.length / 2)
    var capitalizeHalf = halfOne.toUpperCase()
    var secondHalf = str.slice(str.length / 2)
    var capilizeAndLowercase = capitalizeHalf + secondHalf
    console.log(capilizeAndLowercase)
}
problemFour('ashlees')

