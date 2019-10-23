// var lodash = require("lodash"); is the same as var _

var _ = require("lodash");
var randomNumber = _.random(60, 90);

var jsNumber = Math.floor((Math.random() * 90) + 60);

console.log(randomNumber, jsNumber)


// _.sample to pick a random number from the sample bellow
var sample = [10, 2, 13, 50, 323, 4342];
console.log( _.sample(sample));

// ._sample can also be used to pick a random word from the selection bellow:
var words = ['hot dog', 'hamburger', 'pasta', 'pizza', 
    'salad', 'french fries', 'ice cream'];

var word = _.sample(words);
console.log(word);


// _.difference 
var array1 = [94, 302, 349];
var array2 = [302];

//array1, array2;
console.log(_.difference(array1, array2));



