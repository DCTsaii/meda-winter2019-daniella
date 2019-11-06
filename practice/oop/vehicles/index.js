const fs = require("fs"); // to write the terminal data in the Hard Drive
const _ = require("lodash");

// To be able to access a file, use require("./the file you want to export here") the ./ is used because it's a local file within the SAME folder
// Accessing car.js file
const Car = require("./car.js");
// const Helicopter = require("./helicopter");

// Units is American, Miles and Gallons
// Recommend to always keep numbers as number and not as a string in case you want to calculate.

// Commenting code block bellow with /**/ because we're using this index.js file to generate random data using lodash
/*
let honda = new Car("Jesse", "Honda", "Civic", 2000, "black", "8EFD39E9", 125000, 35, 12, "gas", 150);

console.log(honda);
*/ 

// Always call your functions in the index.js file
/*
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);


honda.refuel(10); // filled with 10 gallons
honda.travel(50); // travel 50 miles after refilling
*/

// overloading, changing the parameter of the method you're writing
/*
honda.speak("some text");

// Helicopter
let privateHeli = new Helicopter();
console.log(privateHeli);

// refuel all the cars;
*/

// console.log(_.random(10, 100));

// Creating a new car
// To create a custom name for maker name. To allow to select a custom car 
function createCar(make) {
    // Generating a new car using lodash _.random to generate random data for the car.
let randomCar = new Car(
    "User", 
    make, 
    "Company", 
    _.random(1930, 2020), 
    "transparent", 
    _.random(1111111,9999999), 
    _.random(0, 300000), 
    _.random(40, 40), 
    _.random(4, 40), 
    "gas", 
    _.random(28, 240)
    );
    return randomCar;

}


// console.log(randomCar);

// To add additional data in the JSON file
let container = {
    cars: [], // This car object have an [] array that will hold all the data inside
}

for (let i = 0; i < 100; i++){
    container.cars.push(createCar("Car " + i));
}
// all Arrays have push, pop and other array methods.
// container.cars.push(randomCar);


let stringifiedData = JSON.stringify(container);

// To create a JSON file for the randomCar with data
// let stringifiedCar = JSON.stringify(randomCar)
fs.writeFileSync("carInventory.json", stringifiedData, "utf8");

// to custom select car. Allow me to provide "make" to createCar
console.log(container.cars[2].make);
















// JavaScript Object to String
// Override toString for description of object
