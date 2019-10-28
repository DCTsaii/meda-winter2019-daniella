var fs = require("fs");

//Math.random();

// Converts a JSON string into an actual JavaScript Object.
//JSON.parse();

// Converts a JavaScript Object into actual JSON string.
//JSON.stringify();
var exampleObject = {
    mainKey: 105,
    isThisTrue:  true,
    someText: "some Text!",
    arrays: [100, "string", false],
    childObject: {nestedKey: "inside"},
    aCoolFunction: function () {
        console.log("I am a method that belongs to exampleObject.");
    }
};

// A method is a function that belongs to a object
// A property is a variable that belongs to a object

// the .notation is the most common
console.log(exampleObject.mainKey);
// the ["notation"] is the least common 
console.log(exampleObject["mainKey"]);
exampleObject.mainKey = 106;


// Adding new keys
exampleObject.mainkey2 = 120;


exampleObject.aCoolFunction();

// Console logging a normal Object
console.log(exampleObject);

var jsonText = JSON.stringify(exampleObject);
// Console logging JSON representation of the same Object.
console.log(jsonText);

fs.writeFileSync("exampleJSON.json", jsonText, "utf8");
console.log("File successfully written!");