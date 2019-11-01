class Animal {
    constructor(){
        this.metabolism;
        this.expired;
    }
}

class Mammal {
    // constructor is a method
    // the order of constructor properties matter because it has a index
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb){
        // the order of property doe not matter
        // FIRST PROPERTY
        this.type = type
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
        this.eyes = eyes;
        this.tail = tail;
        this.hair = hair;
        this.mammary = mammary;
        this.lifeExpectancy = life;
        this.heightInches = heightInches;
        this.weightLb = weightLb;
        // THEN YOUR ACTION
        console.log(this.type + " was born.");
    }

    // This is a method like constructor
  eat(){
    console.log(this.type + " eats food.");
  }

  sleep(){
    console.log(this.type + " sleeps");
  }

  // Custom weightLb and heightInches because it's reproduce
  reproduce(weightLb, heightInches){
    console.log(this.type + " created a baby");

    // How to create a new mammal here
    let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, this.heightInches, this.weightLb);

    return baby;
  }

  die(){
      console.log(this.type + " has lived a full life.");
  }
}


// Use const here because you don't want to change the datatype here Mammal
const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4); // Inside the new Mammal() are called properties

// This is a method
firstMammal.sleep();
firstMammal.eat();

// This is a method
let secondMammal = firstMammal.reproduce(4, 6);
console.log(secondMammal.heightInches);

// First and Second Mammal
console.log(firstMammal, secondMammal);



// NEW 
// Create a Cat Mammal 
const firstCatMammal = new Mammal("cat", 4, 1, 1, 2,  1, true, 8, 13, 10, 10);

// This is an array. new Array(); is a class.
let litter = new Array();

// To reproduce a baby
// .push add to the end of a Array
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 3));

console.log(litter);
