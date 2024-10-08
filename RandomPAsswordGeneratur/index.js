
function generatepassword(length, includeLowercase,includeUppercase,includeSymbols,includeNumber){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbols = "!@#$%^&*()_+-";

    let alloedchars = "";
    let password = "";

    alloedchars += includeLowercase ? lowercasechars : "";
    alloedchars += includeUppercase ? uppercasechars : "";
    alloedchars += includeSymbols ? symbols : "";
    alloedchars += includeNumber ? numberchars : "";

    if(length <= 0){
        return `(pasword must be least 3)`;
    }if(alloedchars.length === 0){
        return `(At least one set of Chars must be selected as true)`;
    }

    for(let i =0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * alloedchars.length);

        password += alloedchars[randomIndex];
    }


    return password;
}

const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;


const password = generatepassword(passwordlength, includeLowercase,includeUppercase,includeSymbols,includeNumber);

console.log(`Generated Password ${password}`)