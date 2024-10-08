
// let age = 25 ;

// if(age >= 18){
//     console.log("you are old enough to enter this site");
// }else{
//     console.log("you are not allowed");
// }

// let time = 9;
// if(time < 12){
//     console.log("goog morning");
// }else {
//     console.log("good evening");
// }

// let isStudent = false;
// if(isStudent){
//     console.log("you are student");
// }else{
//     console.log ("you are not student");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;



mySubmit.onclick = function() {
    age  = myText.value;
    age = Number(age);


    if(age > 100){
        console.log("100+")
        resultElement.textContent = `you must die!!`;


    }else if(age == 0){
       
        resultElement.textContent = `first drink mil!`;

    }else if (age >= 18){
        resultElement.textContent = `ok you can!`;

    }else if( age < 0){
        resultElement.textContent = `you don't exist!`;

    }else{
        resultElement.textContent = `use brain!`;


    }


}




