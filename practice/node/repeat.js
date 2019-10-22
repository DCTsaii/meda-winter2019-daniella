// This is REQUIRED TO RUN NODE FILE. 
var fs = require("fs");

// To create file
fs.writeFileSync("repeat.txt", "", "utf8");

// to add text to the end
// fs.appendFileSync("repeat.txt", " This is a loop for repeat txt file.\n", "utf8");

for (var i = 0; i < 100; i = i + 1){

    var lineNumber = i + 1;

    fs.appendFileSync("repeat.txt", ` ${lineNumber} This is a loop for repeat txt file.\n`, "utf8");

}

// To add number you can use ${lineNumber} example above, or the following bellow using concatenation:

// var sentence = "(" + i + ") This is a loop for the repeat txt file.\n";
// fs.appendFileSync("repeat.txt", setence, "utf8");




// NEW FILE REPEAT2.TXT
var fs = require("fs");
fs.writeFileSync("repeat2.txt", "", "utf8");

// to add text to the end
// fs.appendFileSync("repeat.txt", " This is a loop for repeat txt file.\n", "utf8");

for (var i = 0; i < 100; i = i + 1){

   if (i < 9) {
       var sentence = " (" + (i + 1) + ") This is a sample sentence.\n";
   } else if (i > 8 && i < 99) {
       var sentence = " (" + (i + 1) + ") This is a sample sentence.\n";
   } else {
       var sentence = "(" + (i + 1) + ") This is a sample sentence.\n";
   }

   // This is a require in order to run because it adds the elements to the file.
    fs.appendFileSync("repeat2.txt", sentence, "utf8");

}   