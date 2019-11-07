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

// Question 1 What is the average miles per gallon of these 100 cars?
// Solution

let total = 0;

// .length is a property value for the array
for(let i = 0; i < data.cars.length; i++){
    total = total + data.cars[i].MPG;
}

// data.cars is an array
let mpgAverage = total / data.cars.length;

console.log("What is the average miles per gallon of these 100 cars?");
console.log(mpgAverage + " MPG");

// Question 1 END

// QUESTION 2 START How many cars do I have that are built in between 1940 - 1960?

// Solution 

console.log("How many cars do we have that were built between 1940 and 1960, inclusive?");

let cars = data.cars;
// Step 1
// Check the year of the car [the first car index]
// console.log(cars[0].year); // This console.log to check if the .year is working in the terminal.

// Step 3
let carsBetween1940And1960 = 0;

// Step 2
// this for loop is to check for ALL the objects (cars) inside the array
for(let i = 0; i < cars.length; i++){
    // console.log(cars[i]);

    let currentCar = cars[i];
    // console.log(currentCar); to get if the let currentCar = cars[i] work. 
// Step    
    // This is harder to read and understand 
    // if(currentCar.year >= 1940 && currentCar.year <= 1960){}
    
    // This is easier to read and understand
    if(currentCar.year >= 1940){
        if(currentCar.year <= 1960) {
            carsBetween1940And1960 = carsBetween1940And1960 + 1;
        }
    }
}

console.log(carsBetween1940And1960);

// this console.log will get you the last index
// console.log(cars[cars.length - 1].year);
