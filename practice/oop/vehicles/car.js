// To be able to access a file, use require("./the file you want to export here") the ./ is used because it's a local file within the SAME folder
// Accessing vehicle.js file
const Vehicle = require("./vehicle.js");

const Car = class Car extends Vehicle {
    // the orders inside the constructor parameters must be the SAME order in the index.js file
    constructor(owner, make, model, year, color, license, mileage, mpg, tankSize, engineType, topSpeed) {
        // super refers to constructor of the parent of the class
        super(make, model, year, color, owner, engineType, topSpeed); // super has to match position as the class in vehicle.js
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.MPG = mpg; // miles per gallon
    }

    // This is a method
    travel(miles){
        this.currentFuel = this.currentFuel - (miles / this.MPG);
        console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallon of " + this.engineType + " left.") 
        // Math.floor get rid of decimals. Example: Math.floor(this.currentFuel)
        // toFixed(2) is to keep 2 decimals. Example: this.currentFuel.toFixed(1)
    }
}

module.exports = Car;