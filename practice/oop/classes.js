// Sample People Object
let firstPerson = {
    firstName: "Eduardo",
    lastName: "Garcia",
    age: 29, // JavaScript Date and Time Objects.
    city: "San Francisco",
    state: "California",
    occupation: "contractor",
    eye: "transparent",
    hair: "black",
    beard_color: "black",
    transportation: "teleportation",
    marital_status: "single",
    gender: "male",
    food: "sushi"
};

let secondPerson = {
    firstName: "Barbara",
    lastName: "Streisand",
    age: 50,
    occupation: "Actress",
    transportation: "Private Jet",
    gender: "female"
};

let thirdPerson = {
    firstName: "Brad",
    transportation: "Car",
};
// console.log("Welcome! "+ firstPerson.firstName + ", how was your day today?");

// This is a array, array is where you store the variables/let 
let people = [firstPerson, secondPerson, thirdPerson]

// A function that calculates the average age of the people in the array provided.
function getAverageAge(personArray){
    // Start the age 0
    let totalAge = 0;

    for(let i = 0; i < personArray.length; i++){
        // console.log(personArray[i].age);
        totalAge = totalAge + personArray[i].age;
    }

    // This add the average age of the total 
    return totalAge / personArray.length;

}

// console.log("The average age of the people in the array is: " + getAverageAge(people));


// Same object but using Classes instead.
// Class is a blueprint.

// The only thing that exist inside class is functions
// keyword for class is class and the name of the class starts with CAPS, example: class Employee{}.
class Employee {
    // the constructor will always run, you can also add data inside the ()
    // You don't need to create variables when create new parameters 
    constructor(firstNameValue, salary, role, status, timesheet){
        console.log("A new employee was created!")
        this.firstName = firstNameValue;
        this.salary = salary;
        this.role = role;
        this.status = status;
        this.timesheet = timesheet;
        this.originalTime = timesheet;
    }
    // You don't need to type function methods when creating functions inside class. Example below
    work(){
        // console.log(this.firstName + " worked really hard for 1 hour.")
        // You can write like this as well: this.timesheet--;
        if(this.timesheet <= 0){
            console.log(this.firstName + " has already worked for the day.");

        } else (
            console.log(this.firstName + " worked really hard for 1 hour")
        )
        this.timesheet = this.timesheet -1;
        // You can use IF statements in the future
        
        // adding this console log will update ALL employees timesheet hours in the terminal
        // console.log(this);

    }
    
    // GETTER AND SETTER START
    // naming convention of getter and setter
    // setPropertyName
    // getPropertyName
    getSalary(){
        return this.salary;
     }
    setSalary(newSalary){
        if(salary > 10000){
        console.log("This salary needs additional approval");
        return 1;
     } else {
        this.salary = newSalary;
        return 0;
     }
    }
    // Getters and Setters END

    goHomeAndSleep(){
        console.log(this.firstName + " went home to sleep");
        this.timesheet = this.originalTime;
    }

    // GETTER 
    hoursLeft(){
        return this.originalTime;
    }
}

// new Employee();

let firstEmployee = new Employee("Eduardo", 7000, "assistant", "active", 8);
let secondEmployee = new Employee("Pedro", 12000, "professor", "inactive", 4);
let thirdEmployee = new Employee(null, null, null, null, 0);

// console.log(firstEmployee);
// console.log(secondEmployee);
// console.log(thirdEmployee);

// firstEmployee.work();
// secondEmployee.work();
// thirdEmployee.work();
// firstEmployee.goHomeAndSleep();

// Adding this after the this.timesheet = this.timesheet - 1; updates the hours in the timesheet to 7 in the terminal.
// console.log(firstEmployee)
// firstEmployee.work();

// Adding another console.log again will update the hours in the timesheet to 6 in the terminal.
// console.log(firstEmployee)
// firstEmployee.work();


// The keyword this. is related to objects and classes, this. represent the current object.



// console.log(firstEmployee.hoursLeft());



firstEmployee.work();
firstEmployee.goHomeAndSleep();



























// keyword: "this" in classes is very big to become a programmer. If you understand, you're consider a real programmer.

