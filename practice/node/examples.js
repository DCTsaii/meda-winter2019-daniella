// You cannot break strings in doubleQuotes and singleQuotes, everything must be written in the same line.

var doubleQuotes = "this is a string";
var singleQuotes = 'this is a string';

// You can break strings in stringLiteral
var stringLiteral = ` this
is
a string`;

var html =
"<html>" +
"<head>" +
"<style></style>" +
"</head>" +
"<body></body>" +
"</html>";

var html2 = "<html><head><style></style></head><body></body></html>";

var html3 = `
<html>
    <head>
        <style></style>
    </head>

    <body>   
    </body>
</html>
`;

// Update this script to write the text of html3 to a file called sample.html

var fs = require("fs");

fs.writeFileSync("sample.html", html3, "utf8");

// You can have more control changing the file name if you were to store it in a variable. Example bellow:

// var fileName = "sample.html"
// fs.writeFileSync("fileName", html3, "utf8");


