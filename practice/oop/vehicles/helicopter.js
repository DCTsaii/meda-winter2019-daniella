const Vehicle = require("./vehicle.js");

const Helicopter = class Helicopter extends Vehicle {
    constructor(owner, make, model, year, color, license, mileage, gph, tankSize, topSpeed){
        super(make, model, year, color, owner, "kerosene", topSpeed); // kerosene is type of gasoline
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.gph = gph; // Gallons per hour
    }

    fly(hours){
        this.currentFuel = this.currentFuel - (this.gph * hours);
        console.log("The " + this.make + " " + this.model + " flew for " + this.hour + " hours. It has " + this.currentFuel + " gallons left in the kerosene tank.");
    }
}

module.exports = Helicopter;