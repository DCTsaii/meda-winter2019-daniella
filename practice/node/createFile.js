var fs = require("fs");

// Write files, will overwrite existing filenames.
fs.writeFileSync("my first file.txt", "I was created by a JavaScript Project", "utf8");

fs.writeFileSync("mySecondFile.txt", "I created a second file using node", "utf8");

// Read files, must load as utf8 to make sense.
var textThatwasReadFromFile = fs.readFileSync("mySecondFile.txt", "utf8");


// Update files, add to the end of the file.
fs.appendFileSync("some-file.txt", 
" This text file was updated", "utf8");

console.log(textThatwasReadFromFile);

