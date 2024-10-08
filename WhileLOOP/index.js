
// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`Enter Yout Name`)
// }


// console.log (`Hello ${username}`)

let loggedin = false;
let username;
let password;

while(!loggedin){
    username  = window.prompt("Enter your username");
    password = window.prompt("enter password");

    if(username == "admin" && password == "admin"){
        loggedin = true;
        console.log(`You Are loggedin`);;
    }else{
        console.log('wrong username or password');
    }
}