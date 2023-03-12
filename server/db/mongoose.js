const mongoose = require("mongoose");

const connectionURL = process.env.MONGODB_CONNECTION_STRING;

mongoose.set("strictQuery", false);

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
});