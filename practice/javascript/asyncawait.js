/*
async function firstAsync(){
    
    return 27;
}

// console.log(firstAsync());

firstAsync().then((results) => {
    console.log(results);
});
*/

let updateThis = 0; // Homework, change this to a 1

async function firstAsync(){
    let actions = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Value to send to the Promise so it completes."); 
        }, 3000);
    });

    console.log(updateThis);
    updateThis = 1;
    console.log(updateThis);
    let result = await action;
    updateThis = results;
    console.log(updateThis);

    console.log(result);
    return true;
}

let something =  firstAsync();

console.log(something);

console.log("I will run after the firstAsync function");
