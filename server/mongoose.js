const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const DB_URL = process.env.DB_URL;
// mongoose.connect(DB_URL);

const intialDbConnection = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true
    })
        .then(conn => {
            console.log(`db connected`);
        })
        .catch(err => {
            console.log(`Error connecting to Database ${err}`);
        })
}

intialDbConnection();

const adminSchema = mongoose.Schema({
    id: Number,
    username: String,
    email: String,
    password: String
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;