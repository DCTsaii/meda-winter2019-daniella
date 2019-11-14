// Creating a vending machine
// To store objects create an array
let snacks = [];
let profits = 0;
// index 2 Should be the snack name, index 3 should be the cash inputted.
const terminalArguments = process.argv;
console.log(terminalArguments);

// To set price create a class
class snack {
    constructor(price, name, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    restock(num){
        this.quantity = this.quantity + num;
    }
}
// Building a new snack object
let snickers = new snack(1.75, "Snickers Bar", 15); // always use the keyword new when creating a new object
snacks.push(snickers); // .push put it in the array

// Use linear search to go through each item

for (let i = 0; i < snack.length; i++){
     
    let currenctSnack = snacks[i];

    if (terminalArguments[2] == snacks[i].name){
        if(snacks[i].quantity > 0){
            if(snacks[i].price <= terminalArguments[3]){
                console.log("You have purchased " + snacks[i].name);
                console.log("Your change is $ " + (terminalArguments[3] - snacks[i].price));
            }
        }
    }
}