var myFirstVariable = 1000
console.log(1000);

// const Stands for constant
// const is the odd one aside from var and let
const someVariable = 1000;
console.log(1000);

myFirstVariable = myFirstVariable + 1000;
console.log("Added more to myFirstVariable: " + myFirstVariable);

// someVariable = someVariable + 1000;
console.log("Added more to someVariable: " + someVariable);


const pi = 3.14;
// You want to update 3.14 from pi, but you cannot update with const
// pi = 6.28;

const firstName = "Eduardo";
// You want to change name, but you cannot with const
// firstName = "Joseph";

// let remembers a value of a specific scoped 
// var doesn't let you remember during the instance
for(let i = 0; i < 20; i++){
    setTimeout(function () {
        console.log(i);
    }, 100);
}

