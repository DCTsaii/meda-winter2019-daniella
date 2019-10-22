var fs = require("fs");

// Write files, will overwrite existing filenames.
fs.writeFileSync("my first file.txt", "I just replaced the old file", "utf8");

fs.writeFileSync("this is another file.jpg", "Some other text", "utf8")

// Read files, must load as utf8 to make sense.
var textThatWasReadFromFile = fs.readFileSync("some-file.txt", "utf8");

// Update files, adds to the end of the file.
fs.appendFileSync("some-file.txt", 
" This text file was updated.", "utf8");



console.log(textThatWasReadFromFile);


// To create file
fs.writeFileSync("repeat.txt", "Class assigment", "utf8");

// To read file
var loopText = fs.readFileSync("repeat.txt", "utf8");

// to add text
fs.appendFileSync("repeat.txt", " This is a loop for repeat txt file.", "utf8");

console.log(loopText);

