const mongoose = require("mongoose");

const dbConnect = "mongodb+srv://commentsProjectUser:Mnap123@clusterpractice-xz0iz.mongodb.net/test?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
mongoose.connect(dbConnect, options, (error) => {
    if (error){
        console.log("Something happened connecting to the database! Cannot connect.", error)
    }else{
        console.log("Successfully connected to MongoDB!");
    }
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

mongoose.Promise = global.Promise;

// Finished connecting to MongoDB.