let something = 10 + 30;

function firstFunction() {

    console.log("Something happened");
    return something;
}

function secondFunction() {
    console.log("Everything is running perfectly.");
}

console.log(something);

console.log("This file ran.");

module.exports = {
    firstFunction: firstFunction,
    secondFunction: secondFunction
};

