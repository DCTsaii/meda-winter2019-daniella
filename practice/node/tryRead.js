// Important FS package
var fs = require("fs");

// Try to run the following code..
try { 
    var fileText = fs.readFileSync("ex.txt", "utf8");

// ... If there is an error, then run the following
} catch(e) {
    console.log("We tried to read ex.txt but it seems it doesn't exist. We have created it for you!");

    fs.writeFileSync("ex.txt", "", "utf8");
    
// finally will always run whether there was an error or not.
} finally {
    fs.appendFileSync("ex.txt", "This is a string.\n", "utf8");
}

// Because our code was in a try catch, it will not stop the program, and will complete.
console.log("The program has finished!")