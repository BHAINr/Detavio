const mongoose = require("mongoose");

const connnectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then((data) => {
            console.log(`mongodb connected to ${data.connection.host}`);
        })


}

module.exports = connnectDatabase;  