// To be able to access a file, use require("./the file you want to export here") the ./ is used because it's a local file within the SAME folder
// Accessing vehicle.js file
const Vehicle = require("./vehicle.js");

// You can also write module.exports = const Car = class Car extends Vehicle {}
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

        if(this.currentFuel >= 0){

            if(this.currentFuel * this.MPG >= miles) {
                this.currentFuel = this.currentFuel - (miles / this.MPG);
                console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallon of " + this.engineType + " left.")
            } else {
                console.log("The " + this.make + " " + this.model + " doesn't have enough fuel to travel that far.");
                refuel(1);
            }

        } else {
               console.log("The " + this.make + " " + this.model + " has no gas.");
               refuel(1)
        }
         
        // Math.floor get rid of decimals. Example: Math.floor(this.currentFuel)
        // toFixed(2) is to keep 2 decimals. Example: this.currentFuel.toFixed(1)
    }

    refuel(gallons) {

        if(gallons <= 0) {
            console.log("You need to provide fuel (positive number).");
            return 1; // If you did not refuel properly
        } else {
            if(gallons >= this.tankSize) {
                console.log("You provided too much fuel, cannot fit into tank.");
            } else {
                // This checks how much free space we have in the gallon
                if(this.tankSize - this.currentFuel < gallons) {
                    console.log("There is not enough free space in the fuel tank to add that many gallons.");
                    return 1; // return 1 means failed
                } else {
                    this.currentFuel = this.currentFuel + gallons;
                    console.log(this.model + " was successfully refueled with" + gallons + " gallons of gas.");
                    return 0; // return 0 means successfully
                };
            }
        }
    }

}

module.exports = Car;