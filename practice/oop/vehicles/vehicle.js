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
    
    // Overriding example
    speak(){
        console.log("This is a vehicle object.");
    }


}
// To export the class use module.exports
module.exports = Vehicle;

// Example of no such thing as Overload in Javascript 
// arg1 = argument 
/*
function myFunction(){
    console.log(arguments[0], arguments[1]);
}

myFunction("1", "Really important data");
*/


