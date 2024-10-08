// calling one method after other
let usename = window.prompt("Enter Your Username: ");
// no method chaining


// usename = usename.trim();

// let letter = usename.charAt(0);

// letter = letter.toUpperCase();

// let extrachars = usename.slice(1);

// extrachars = extrachars.toLowerCase();

// usename = letter + extrachars;

// console.log(usename)

//method chaining

usename = usename.trim().charAt(0).toUpperCase() + usename.trim().slice(1).toLowerCase();
console.log(usename);