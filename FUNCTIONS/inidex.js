
// function happyBirthday(username) {
//     console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");
//         console.log(`Happpy birthday TO ${username}`);
//         console.log("Happpy birthday TO YOU");
//         console.log("Happpy birthday TO YOU");

// }
// happyBirthday("sanjay");
// happyBirthday("spongBOBB")

function add(x , y){
    let result = x + y;
    return result
    ;
}

function sub(x , y){
    let result = x - y;
    return result
    ;
}function mul(x , y){
    let result = x * y;
    return result
    ;
}

function isEven(number){
    if(number % 2 === 0){
        return true
    }else {
        return false
    }
}


function isvalidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }

}




let ans = add(2 , 6);
console.log(ans)

let anss = sub(2 , 6);
console.log(anss)

let ansss = mul(2 , 6);
console.log(ansss)

console
.log(isEven
    (27)
)

console.log(isvalidEmail("sanjay@gmail.com"))
console.log(isvalidEmail("sanjail.com"))