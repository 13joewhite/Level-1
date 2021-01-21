// // PRELIMINARIES
// //1.
// for (let i = 0; i <= 9; i++) {
//     console.log(i)
// } 
// //2.
// for (let j = 9; j >= 0; j--) {
//     console.log(j)
// }
// //3
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }



//BRONZE MEDAL
//1.
// var newArray = []
// for (let i = 0; i <= 9; i++) {
//    newArray.push(i)
// } 
// console.log(newArray)

// //2. 
// for (let i = 0; i <= 100; i++) {
//     if (i === 0) {
//         console.log(i +  " is even");
// }
// else if (i % 2 === 0) {
//         console.log(i + " is even");   
// }
// }

//3.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (let i = 0; i < fruit.length; i++) {
        if (i === 1) {
                 console.log(fruit[i]);
 } else if (i % 2 === 1) {
        console.log(fruit[i])
 }
}