// const min = 50;
// const max = 100;



// let randomnum = Math.floor( Math.random() * (max - min)) + min;
// console.log(randomnum)


const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomnum ;

myButton.onclick = function() {
    randomnum = Math.floor( Math.random()*max) + min;
    myLabel.textContent = randomnum;

}