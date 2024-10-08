const textbox1 = document.getElementById("textbox");
const tofahrenheit1 = document.getElementById("tofahrenheit");
const tocelsius1 = document.getElementById("tocelsius");
const result1 = document.getElementById("result");

let temp;


function convert(){

    if(tofahrenheit1.checked){

        temp = Number(textbox1.value);

        temp = temp * 9 / 5 + 32;

        result1.textContent = temp.toFixed(1) + "F";


    }else if(tocelsius1.checked){

        
        temp = Number(textbox1.value);

        temp =( temp - 32) * (5 / 9 );

        result1.textContent = temp.toFixed(1) + "C";

    }else{
        result1.textContent = "Select a Unit";
    }

}