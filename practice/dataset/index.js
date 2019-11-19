// To test if the index.js is working, type node index.js in the terminal. Have console.log("Test"); saved here.
// console.log("Test");

// Include packages we will be using.
const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8"); // Type the file name exactly like it is. 

// Converted string into array where each new line is a new index.
const dataArray = dataset.split("\n"); 
// .split("") will split by coma, .split("\n") will split by new line

// console.log(dataArray[dataArray.length]);

// Removing the last index because it is empty.
dataArray.pop();

// Removing first line, but keeping it because we will use it in the future.
let headings = dataArray.shift();

// console.log(dataArray[22]); // inside the [] write a index of the line from the file you want to read. In this case, line 22 from the Eviction_Notice.csv file.

// Rename the 23rd record into a specific variable name.

/*
const singleEntry = dataArray[1900];
const singleEntryArray = singleEntry.split(","); 
console.log(singleEntryArray[5]); // index of the year
const entryDate = singleEntryArray[5].split("/");
console.log(entryDate); // to get the full date
console.log(entryDate[2]); // index [2] to get the year 
if ("2018" == entryDate[2]){
    console.log("This is an entry for 2018.");
}
*/
// console.log(dataArray.length); // The counter of how many lines

// Counter for the amount of 2018 entries we found.
let total = 0;

let json2018Data = {
    headings: headings,
    data: []
};

// Loop through all the entries of the dataset (not including headings, and last empty line).
for (let i = 0; i < dataArray.length - 1; i++){

    // Test the entry using the is2018 function
    let pass = is2018(dataArray[i]); // to minimize the amount of time to run, store in a variable.


    // If pass is true, then add a 1 to counter.
    if (pass === true){
        // console.log("The line entry " + i + " is from the year 2018!");
        total++; // adding a 1 to the counter 

        json2018Data.data.push(dataArray[i]); // To add data inside the data object line 45.

    // If we encounter an issue, tell us about it.
    } else if (pass === 1){
        console.log("The line " + (i + 1) + " has issues! Please check.");
        console.log(dataArray[i]);
    }

    // Otherwise if other than 2018, move on to the next entry.
}

// Finally console log the total amount of entries that matched 2018.
// console.log(json2018Data);

// console.log("The line entry " + 2 + " is from the year 2018: " + is2018(dataArray[22]));

let jsonString = JSON.stringify(json2018Data); // to stringify the JSON file in order to create a writeFileSync.

fs.writeFileSync("2018entries.json", jsonString, "utf8");
console.log("File was written!");





// This accepts a string only, returns true, false, or 1 if issue.
function is2018(entry){ 
    // Create an array that splits up the individual columns of entry.
     const singleEntryArray = entry.split(","); 

     // Grab the date index, and split that by its day, month and year, store in another array.
     const entryDate = singleEntryArray[5].split("/");
 
    // Using the array with the individual date parts, check the year index and to 2018.
    if ("2018" == entryDate[2]){
        // If it is 2018, return true.
        return true;
    } else if (undefined === entryDate[2]){ // split the year 
        // If there is no value in index 2, that means there was an issue.
        console.log("We found the issue with the line:\n" + entry);
        return 1;
    } else {
        // If it is not 2018, return false.
        return false;
    }
}