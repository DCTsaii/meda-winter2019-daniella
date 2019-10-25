// Empty "" means we are starting with ZERO stars
var stars = "";

for(var counter = 0; counter < 10; counter = counter +1){

    stars = stars + "*";

    console.log(stars);
 }


 for(var counter = 9; counter > 0; counter = counter - 1){
     // slice
    var newString = stars.slice(0, counter);
    console.log(newString);
    
     
 }

 // DNRY CODE: DO NOT REPEAT YOURSELF