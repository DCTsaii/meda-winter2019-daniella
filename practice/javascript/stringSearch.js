var fs = require("fs");

var terminalArguments = process.argv;

// To test if your process.argv works run code bellow:
// console.log(terminalArguments);

// to run this program in the terminal type: node stringSearch.js "your string here with quotes" e <-- the letter you want to search


// to read the file in the terminal
var textFromFile = fs.readFileSync(terminalArguments[2], "utf8");


characterSearch(textFromFile, terminalArguments[3]);

















// the "text" inside the characterSearch belongs only inside the function
function characterSearch(text, letter) {
    console.log("Searching the string: " + text);

    var foundLetters = 0;

    for (var i = 0; i < text.length; i++) {

        if (text.charAt(i) == letter) {
            foundLetters = foundLetters + 1;
            
            //foundLetters++ , adds one to the existing variable
            // foundLetters += 1 , a lot like ++ but adds one to existing variable.
        }
        
    }

    console.log("We found a total of " + foundLetters + " " + letter + "'s");

}


