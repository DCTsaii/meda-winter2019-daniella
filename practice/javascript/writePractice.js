// Using FileSystem package to create files.
var fs = require("fs");

// Example JavaScript Object
var person = {
    firstName: "John",
    lastName:  "Doe",
    age: 50,
    eyeColor: "green",
};

// Converts a given JS Object to JSON String.
var jsonText = JSON.stringify(person);
// Console logging JSON representation of the same Object.
console.log(jsonText);

// Create a file, writes the 
fs.writeFileSync("saved.json", jsonText, "utf8");
console.log("File successfully written!");