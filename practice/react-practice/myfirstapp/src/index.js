// import vs require

// Include React packages to use in program
import React from 'react';
import ReactDOM from 'react-dom';

// Create our first component, barebones.
// first argument is name of element, second argument is attributes, third argument is element.
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
const idOfDiv = "test";
// JSX version of createElements();
const app = (
    // To "interpolate" JavaScript, use curly braces.
    <div id={idOfDiv}>
        {title}
        {paragraph}
    </div>
);
// Render component to target element.
ReactDOM.render(
    app,
    document.getElementById("root")
);