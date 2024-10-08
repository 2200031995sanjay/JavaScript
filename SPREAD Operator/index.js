//  allows an iterable such as a array or string to be expanded into seperate elements

let numbers = [1,2,3,45,5];

let maximum = Math.max(...numbers);

let minnum = Math.min(...numbers);

console.log(maximum)
console.log(minnum)


let username = "Sanjay Kumar Velivela"

let letter = [...username].join("-")

console.log(letter)


let fruites = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"]

let  newfruits = [...fruites,...vegetables, "eggs", "milk"];

console.log(newfruits

)