const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("SF_Film_Locations.csv", "utf8"); // Type the file name exactly like it is. 

// Converted string into array where each new line is a new index.
const dataArray = dataset.split("\n"); 

dataArray.pop();

// Removing first line, but keeping it because we will use it in the future.
let headings = dataArray.shift();


console.log(dataArray[22]); // inside the [] write a index of the line from the file you want to read. In this case, line 22 from the Eviction_Notice.csv file.

// Rename the 23rd record into a specific variable name.


const singleEntry = dataArray[4];
const singleEntryArray = singleEntry.split(","); 
console.log(singleEntryArray[2]); // index of the year
const entryDate = singleEntryArray[2].split("/");
console.log(entryDate); // to get the full date
console.log(entryDate[4]); // index [2] to get the year 
if ("2018" == entryDate[4]){
    console.log("This is an entry for 2018.");
}

console.log(dataArray.length); // The counter of how many lines

// Counter for the amount of 2018 entries we found.







