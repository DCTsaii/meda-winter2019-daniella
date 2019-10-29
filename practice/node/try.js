try {
    someFunction();
} catch (error) {
    console.log("I'm sorry we failed to run that function");

    try {
        someOtherFunction();
    } catch (error) {
        console.log("The error " + error.name + " had the following to say: " + error.message)

    }

}

console.log("Your program has sucessfully completed!");

// typeof is to test to see what you have
// console.log(typeof "");