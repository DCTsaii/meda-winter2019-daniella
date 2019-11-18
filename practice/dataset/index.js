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
console.log(dataArray.length);

let total = 0;

for (let i = 0; i < dataArray.length - 1; i++){

    let pass = is2018(dataArray[i]); // to minimize the amount of time to run, store in a variable.

    if (pass === true){
        console.log("The line entry " + i + " is from the year 2018!");
    } else if (pass === 1){
        console.log("The line " + (i + 1) + " has issues! Please check.");
        console.log(dataArray[i]);
    }
}

console.log(total);

// console.log("The line entry " + 2 + " is from the year 2018: " + is2018(dataArray[22]));





// This accepts a string only, returns true, false, or 1 if issue.
function is2018(entry){
     const singleEntryArray = entry.split(","); 
     const entryDate = singleEntryArray[5].split("/");

    if ("2018" == entryDate[2]){
        return true;
    } else if (undefined === entryDate[2]){
        console.log("We found the issue with the line:\n" + entry);
        return 1;
    } else {
        return false;
    }
}