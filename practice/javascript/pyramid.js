// Empty "" means we are starting with ZERO stars
var stars = "";

// stars = stars + "*";


// for is for LOOPS
for(var counter = 0; counter < 10; counter = counter +1){

    stars = stars + "*";

    console.log(stars);
 }
 
 // What splits does is it breaks up your strings in individual parts.
 var starsArray = stars.split("");


 // You can use the same variable counter if the FOR LOOP is in a new code block. NOT NETESTED.
 for(var counter = 0; counter < 9; counter = counter +1){
     // .pop Takes off at the end
     starsArray.pop();
     // .join is a lot of .split but you don't split, you join them
     console.log(starsArray.join(""));
     
 }

 // BREAK is used for LOOPS, it ends the loop/kill the whole loop
 // CONTINUE is used for LOOPS, it ignores previous loop and continues after
 // RETURN is used ONLY for function

 // RECURSION Recursive Function is used for searching things
 // function runOver(){
    // funOver();
// }

// .pop is NOT a function for string.


// This is a pyramid for two stars.

for(var counter = 0; counter < 10; counter = counter +1){

    stars = stars + "**";

    console.log(stars);
 }

 var starsArray = stars.split("");

 for(var counter = 0; counter < 9; counter = counter +1){
    // .pop Takes off at the end
    starsArray.pop();
    // adds a second .pop 
    starsArray.pop();
    console.log(starsArray.join(""));
    
}


