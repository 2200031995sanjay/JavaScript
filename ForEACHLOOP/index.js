// method used to iterate over the elements of an array and apply a specified function(callback) to each element
// array.forEach(callback) element , index , array are provided

// let numbers = [1,2,3,3,4,5,4];;

// numbers.forEach(square)
// numbers.forEach(display)


// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] =Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] =Math.pow(element, 3);
// }


// function display(element){
//     console.log(element);
// }


let fruits = ["apple", "orange", "babana", "hlowdinw"];

fruits.forEach(capitalize)
fruits.forEach(display);

function  uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()  +element.slice(1);
}

function display(element){
    console.log(element);
}