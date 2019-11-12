// To create a server file
// TEMPLATE START 
const express = require("express"); 
const bodyParser = require("body-parser"); // bodyParser is its own package, bodyParse is needed in order to understand front-end
const app = express(); // to activate the server
const http = require("http").Server(app); // to call server to provide http
const port = 3000;
http.listen(port); // to tell HTTP which port to listen to

console.log("Express server running on port " + port);
// TEMPLATE END

// Needed to read data sent through POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // extended: false is an option for bodyParser


// Custom Code for Express after this line.
// Routes
app.use("/", express.static("client/")); // Is used to offer static file for front-end

// ARROW FUNCTION START
// app.post("/name of the root", request, response)
app.post("/updateData", (request, response) => { // Is for responding to any hosting requests

    // create a let variable if you're confused about request.body.message example bellow:
    let objectFromRequest = request.body; // Object from Request is something that came outside.
    console.log(objectFromRequest.message);

    let text = request.body.message; // this is required to send data

    console.log("We received a request for updateData: " + text);

    // If you don't want to send any data back, you can use .sendStatus() You can only use sendStatus or send once to fulfill front-end request.
    // response.sendStatus(200);

    let data = {
        text: "Thank you for your message"
    }
    response.send(data);
    // ARROW FUNCTION END

    // respond.sendStatus(200); is the same as return. If you don't want to send data back, use respond.sendStatus

    // response.sendStatus is only used if everything is okay
    // response.sendStatus(200); 
    // 200 is a HTTP status, it means it's okay

});

// 200 is the default of everything is okay
