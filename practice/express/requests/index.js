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

    console.log(request.body);

    console.log("We received a request for updateData");
    response.sendStatus(200); // 200 is a HTTP status

});

// 200 is the default of everything is okay
