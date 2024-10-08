//const = a variable that cant't be changed


const PI = 3.14159;
let radius ;
let circumfarene;



// radius = window.prompt('Enter the radius ');
// radius = Number(radius);

// circumfarene = 2 * pi * radius;
// console.log(circumfarene);


document.getElementById("mySubmit").onclick = function(){
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   circumfarene = 2 * PI * radius;

   document.getElementById("myH3").textContent = circumfarene + "cm";
}
