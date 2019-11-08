// To create a server file
const express = require("express");
const bodyParser = require("body-parser"); // bodyParser is its own package
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express server running on port " + port);

// Needed to read data sent through POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // extended: false is an option for bodyParser

// Routes
app.use("/", express.static("client/"));

// app.post("/name of the root", request, response)
app.post("/updateData", (request, response) => {

    // create a let variable if you're confused about request.body.message example bellow:
    let objectFromRequest = request.body;
    console.log(objectFromRequest.message);

    let text = request.body.message; // this is required to send data

    console.log("We received a request for updateData");

    let data = {
        text: "Thank you for your message"
    }
    response.send(data);

    // response.sendStatus is only used if everything is okay
    // response.sendStatus(200); 
    // 200 is a HTTP status

});

// 200 is the default of everything is okay
