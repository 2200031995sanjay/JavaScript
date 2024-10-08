
const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum) + 1) + minnum;


let attempt = 0;
let guess ;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minnum} and ${maxnum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please  valid number");
    }else if(guess < minnum || guess > maxnum){
        window.alert("please a vald number");
    }else{
        attempt++;
        if(guess < answer){
            window.alert("Try again ! to low");
        }else if(guess > answer){
            window.alert("Try Again ! To High");
        }else{
            window.alert(`Correct !!The Answer was ${answer} , it took yoou ${attempt} attempts`);
            running = false;
        }
    }



   
}