// Store a class to a const so it will be able to export to index.js file
const Vehicle = class Vehicle {
    constructor(make, model, year, color, owner, engineType, topSpeed){
        this.topSpeed = topSpeed;
        this.engineType = engineType;
        this.model = model;
        this.year = year;
        this.color = color;
        this.make = make;
        this.owner = owner;
        console.log("New vehicle was created.");
    }


}
// To export the class use module.exports
module.exports = Vehicle;