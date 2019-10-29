// Import the Package FS.
var fs = require("fs");

// Define a variable for future Object. 
var convertedObject;

// Read file saved.json to work on content.
var jsonText = fs.readFileSync("saved.json", "utf8");

// Converting JSON to Javascript Object. Must be JSON format or will break.
convertedObject = JSON.parse(jsonText);

// To find out which key property to update, console log. Example:
// console.log(convertedObject);

// Update the age property.
convertedObject.age = 2;

// To add a new property.
convertedObject.legs = 6;

// To check your updated object, console log.
// console.log(convertedObject);

// Converted JavaScript Object into JSON text.
var stringfiedObject = JSON.stringify(convertedObject);


// START HISTORY SAVE
// This section adds a historical record of the data to a file called "history.txt".

// Previous way of writing history, but unusable for JS Programs.
// fs.appendFileSync("history.txt", stringfiedObject + "\n", "utf8");

// Read history file
var historyString = fs.readFileSync("history.json", "utf8");

// Convert JSON to JS Object
var historyObject = JSON.parse(historyString);

// "Pull out" arrays from historyObject
var historyArray = historyObject.objectsArray;
var timeStampArray = historyObject.timeStamp;

// Add new information to the arrays.
historyArray.push(convertedObject);
timeStampArray.push(new Date().toLocaleString());

// Update arrays in HistoryObject with modified arrays
historyObject.objectsArray = historyArray;
historyObject.timeStamp = timeStampArray;

// Convert Object to JSON
var newUpdatedJSON = JSON.stringify(historyObject);

// Overwrite new JSON on history.json
fs.writeFileSync("history.json", newUpdatedJSON, "utf8");



// to gather the first object array and first time stamp
// console.log(historyObject.objectsArray[1], historyObject.timeStamp[1]);

// END HISTORY Record Save



// Updated the JSON file, replacing old content.
fs.writeFileSync("saved.json", stringfiedObject, "utf8");
