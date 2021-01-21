//challenge 1
const array = [8, 12, 26, 4]
const test = [206, 856, 456, 988]
const largest = function(array) { 
    let greatestNumber = 0
    for (let  i = 0; i < array.length; i++) {
        if(array[i] > greatestNumber) {
            greatestNumber = array[i]
        } 
    } 
    return greatestNumber
} 
console.log(largest(test))





//challenge 2


const lettersWithStrings = [`#3k`, `*(h4)`, `123#$L`, `CWR@43#`]

const sameCharacter = function(array) {
    let character = `#`
    let filteredArray = []
    for (let i = 0; i < array.length; i++) { // goes through each item in array
        let newString = array[i].split(``)
        let isCharacter = false
        for (let j = 0; j < newString.length; j++) { // Goes through each character in array
            if(newString[j] == character) {
                isCharacter = true
            } 
        }
    if(isCharacter) {
        filteredArray.push(array[i])
    }
    }
    console.log(filteredArray)
    return filteredArray
}
sameCharacter(lettersWithStrings)




//challenge 3

function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
         return true
    } else {
        return false
    }
}
console.log(isDivisible(125, 5))








// const lettersWithStrings = [`#3k`, `*(h4)`, `123#$L`, ` CWR@423`]

// const sameCharacter = function(arr){
//   let character = '#'
//   let filteredArray = arr.filter( string => {
//     let newString = string.split('')
//     if(newString.includes(character)){
//       return string
//     }
//   })
//   return filteredArray
// }

// sameCharacter(lettersWithStrings)






// const employees = [{name: 'Bob', age: 28}, {name: 'James', age: 33},{name: 'Joe', age: 16},{name: 'Michael', age: 15},]

// const newEmployees = employees.filter((employee)=> {
//   return employee.age > 20
// })

// console.log(newEmployees)