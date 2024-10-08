// (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate Elements 
// rest = bundels seperate Elements into an array



// function openFridge(...foods){
//     console.log(foods);
// }

// const food1 = "pizza";
// const food2 = "pizza1";
// const food3 = "pizza2";
// const food4 = "pizza3";
// const food5 = "pizza4";

// openFridge(food1,food2,food3,food4,food5)

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum (1,3,4,56,67,75,9)
// console.log(`your total sum is ${total}`)


// function getavg(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const avg = getavg (1,3,4,56,67,75,9)
// console.log(`your total avg is ${avg}`)



function combineString(...strings){
    return strings.join(" ");

}



const fullname = combineString("MR.","sanjay", "kumar","deshmuk");

console.log(fullname)