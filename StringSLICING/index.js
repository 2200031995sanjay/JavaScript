const fullname = "brosccr Code";


// let firstname = fullname.slice(0, 3);
// console.log(firstname)

// let lastname = fullname.slice(4, 8);
// console.log(lastname);

// let firstcharacter = fullname.slice(0,1);
// console.log(firstcharacter);

// let lastchar = fullname.slice(-1);
// console.log(lastchar)

// let firstname = fullname.slice(0 , fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" "))
// console.log(firstname)
// console.log(lastname);

const email = "sanjay@gmail.com";

let username = email.slice(0 , email.indexOf("@"))
let Extension = email.slice( email.indexOf("@") + 1)

console.log(username)

console.log(Extension)