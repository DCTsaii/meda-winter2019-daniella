// How to create an Express server
const express = require("express");

// Run the Express Server
const app = express();

// Feed Express server to the HTTP package
// HTTP Request is a signal sent to database
const http = require("http").Server(app); // .Server is a class and (app) is an argument 

// Normal webpage port is Port:80
// Development(server) webpage port is Port: 8080

// port 3000 is node's default server.
const port = 3000;

// Tell HTTP to which port to listen to.
http.listen(port); // .listen is a method that tells http what port to listen to.

console.log("The express server is running on port " + port + "!");

app.use("/client", express.static("./web_files/"));

// To run the server, type node nameOfTheFile.js in the server(doesn't auto save update, have to kill server ctr C and rerun the server)
// http://localhost:3000/client

// To run the server with nodemon, type nodemon nameOfTheFile.js in the terminal (it auto save updates in your file.)

// DNS = Domain Name Service
// LocalHost is the first thing the computer hit

/* HTTP Request Methods
** The most common HTTP Request bellow:
* POST - post lets you receive and send data from server/client
* GET - only send data from server to client
* PUT - ?
* DELETE - delete data
*/
