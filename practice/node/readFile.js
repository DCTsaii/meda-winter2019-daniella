var fs = require("fs");

// Recieves the readFile var as a string and stores it in the variable
var readFile = fs.readFileSync("repeat.txt", "utf8");
console.log(readFile);
