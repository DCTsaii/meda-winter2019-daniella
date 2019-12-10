// import vs require

/* Quick Review
let myFirstReactElement = (
    <h1 id="firstHeader">Hello World!</h1>
);

ReactDOM.render(
    myFirstReactElement,
    // document.querySelector("body") 
    document.getElementById("root")
);
*/

// Include React packages to use in program
import React from 'react';
import ReactDOM from 'react-dom';


// Create our first component, barebones.
// first argument is name of element, second argument is attributes, third is content of element.
const title = React.createElement(
    "h1",
    {
        id: "top"
    },
    "Hello World!"
);

const paragraph = React.createElement(
    "p",
    null,
    "This is a paragraph!"
);

function About(props){
    return(
        <p>This is officially a React Function Component</p>
    );
}

class MyClass{}

function H1Generator(props){
    let temp = props.text;
    return(
        <h1 className="myCSSClass">{props.text}</h1>
    );
}

// Arrow function ALWAYS WRITE IN ARROW FUNCTION
const H2Generator = (props) => {
    return(<h2>{props.something}</h2>);
}

// Class component 
class Counter extends React.Component{
    constructor(){
        super(); // super runs the constructor of the class that stands
        // Review special way tp update states for Class Components.
        this.state = {
            score: 0
        };
    }

    render(props){
        return(<p>The current score is: {this.props.tempScore}</p>);
    }
}

/* 
const paragraph2 = React.createElement(
    "p",
    null,
    "This is a second paragraph."
);
*/

const idOfDiv = "test";
// JSX version of createElements();
const app = (
    // To "interpolate" JavaScript, use curly braces.
    <div id={idOfDiv}>
        <About tempScore={3}/>
        <H1Generator text="Hi this is custom text!" />
        <H2Generator something="Some text" />
        <H1Generator text="This is some other line!" />
        <Counter />
        {title}
        {paragraph}
    </div>
);
// Render component to target element.
ReactDOM.render(
    app, // item you want to render
    document.getElementById("root") // where you want to render to
);

// JSX Syntax is XML
// Anything that is written in JSX should go in between a pair of parentheses.
// Any JavaScript inside of JSX should be written between a pair of curly braces.
// EXAMPLE:
// let text = (<p>{someJSVariable}</p>);

// let text2 = <p></p>