const Vehicle = require("./vehicle.js");

const Truck = class Truck extends Vehicle {
  // the orders inside the constructor parameters must be the SAME order in the index.js file
  constructor(owner, make, model, year, color, license, mileage, mpg, tankSize, engineType, topSpeed, capacity) {
      // super refers to constructor of the parent of the class
      super(make, model, year, color, owner, engineType, topSpeed); // super has to match position as the class in vehicle.js
      this.license = license;
      this.mileage = mileage;
      this.tankSize = tankSize;
      this.currentFuel = this.tankSize;
      this.MPG = mpg; // miles per gallon
      this.capacity = capacity
  }

  transport(tons) {
    if (this.capacity < tons) { 
      console.log("No, this " + this.make + " " + this.model + " cannot handle " + tons + " tons.");
    } else if (tons >= this.capacity){
      console.log("Yes, this " + this.make + " " + this.model + " can handle " + tons +   " tons.");
    }
     
  } 


}

module.exports = Truck;