// To be able to access a file, use require("./the file you want to export here") the ./ is used because it's a local file within the SAME folder
// Accessing car.js file
const Car = require("./car.js");
// Accessing truck.js file
const Truck = require("./truck.js");

// Units is American, Miles and Gallons
// Recommend to always keep numbers as number and not as a string in case you want to calculate.
let honda = new Car("Jesse", "Honda", "Civic", 2000, "black", "8EFD39E9", 125000, 35, 12, "gas", 150);

console.log(honda);

// Always call your functions in the index.js file
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);


honda.refuel(10); // filled with 10 gallons
honda.travel(50); // travel 50 miles after refilling

// Truck Homework
let volvo = new Truck("Kevin", "Volvo", "VNR 640", "2019", "black", 21, 10, 21, 60, "diesel", 60, 1000);

console.log(volvo);
volvo.transport(21);
volvo.transport(34388978);