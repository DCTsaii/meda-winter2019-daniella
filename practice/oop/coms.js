var mathLibrary = require("./library.js");
var helloLibrary = require("./library2.js");

function runAll(nA, userName) {

    var results = mathLibrary.mathify(nA[0], nA[1], nA[2], nA[3]);

   console.log(results);

   helloLibrary.sayHello(userName);

   console.log(helloLibrary.author);
}

module.exports = {
    runAll: runAll
}

// You cannot modify the codes in the console log, example:
// console.log(daniellaLibrary.mathify(59, 830, 84, 20));
