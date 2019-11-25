// Use the mongoose package so we can talk to MongoDB Atlas.
const mongoose = require("mongoose");

// The credentials and location to log into the MongoDB account. This should normally be somewhere else that's more secure.
const dbConnect = "mongodb+srv://practiceUser:Mnap1234@clusterpractice-xz0iz.mongodb.net/test?retryWrites=true&w=majority";
// Additional options when connecting to MongoDB.
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
// Actually connect to the MongoDB database. Attach the login credentials string and the options objects.
mongoose.connect(dbConnect, options, (error) => {
    // When MongoDB server responds, test if an error was received.
    if (error){
        // If there was an error, display it.
        console.log("Something happened connecting to the database! Cannot connect.", error)
    }else{
        // If no error, congrats!
        console.log("Successfully connected to MongoDB!");
    }
});
// Store the object "connection", in a variable called db.
let db = mongoose.connection;
// Hookup any MongoDB errors we receive to the console.
db.on("error", console.error.bind(console, "MongoDB connection error: "));
// Tell mongoose what a Promise is by providing the Class to it.
mongoose.Promise = global.Promise;

// Finished connecting to MongoDB.

// A Schema for our database.

let Schema = mongoose.Schema;

let practiceSchema = new Schema({
    note: String,
    old: Boolean,
    timesUpdated: Number
});

let practiceModel = new mongoose.model("myfirstcollections", practiceSchema);

let newEntry = new practiceModel({
    note: "This is my second note on the database",
    old: true,
    timesUpdated: 2
});

newEntry.save((error) => {
    if (error){
        console.log("There was an error at MangoDB Atlas" + error);
    } else {
        console.log("We saved the data!");
    }
    
});
