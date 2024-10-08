// a fuction that is passed as an argument to another function


// hello(white)

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function leave(){
//     console.log('leave ')

// }

// function white(){
//     console.log('wait ')

// }

// function bye(){
//     console.log('bye bye')
// }

sum(displaypage,69 , 0);

function sum(callback  , x , y){
    let result = x + y;
    callback(result);
}

function displayresult(result){
    console.log(result)
}

function displaypage(result){
    document.getElementById("myh1").textContent = result;
}