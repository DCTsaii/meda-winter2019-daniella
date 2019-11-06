const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

// .parse convert JSON to JavaScript Objects
data = JSON.parse(data);
// to check if the data is working
// console.log(data);

// to call items in the array
// console.log(data.cars[49].MPG);

// Examples to extract items bellow:
// let carsArray = data.cars;
// carsArray.length or 
// data.cars.length <-- direct access

// What is the average miles per gallon of these 100 cars.
// To find out the average, we add up all the MPG properties and divide by how many cars there were.

let total = 0;

// .length is a property value for the array
for(let i = 0; i < data.cars.length; i++){
    total = total + data.cars[i].MPG;
}

// data.cars is an array
let mpgAverage = total / data.cars.length;

console.log("What is the average miles per gallon of these 100 cars?");
console.log(mpgAverage + " MPG");
