//1. Easy Way = window promt
//2. PROFESSSIOONAL WAY = HTML textbox


let username;

// username = window.prompt("what's your user name");
// console.log(username)

document.getElementById("mySubmit").onclick = function(){
    username =document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}