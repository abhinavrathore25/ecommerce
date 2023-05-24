require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const Admin = require("./mongoose");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "./client/build")));

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/adminauthentication", (req, res) => {

    const adminCreds = req.body;

    Admin.findOne(adminCreds)
        .then(resp => {
            if (resp !== null) {
                console.log(resp);
                res.send('Success');
            }
            else
                res.send('Faliure');
        })
        .catch(err => {
            console.log(err);
            res.send(`Server Error: ${err}`);
        });
})

    .post("/createUser", (req, res) => {
        const newUser = new Admin(req.body);
        newUser.save()
            .then(resp => res.send('Success'))
            .catch(err => res.send('Failure'));
    })

// This route serves the React app
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

mongoose.connection.once('open', () => {
    app.emit('ready');
});

app.on('ready', function () {

    app.listen(port, () => console.log(`Server listening on port ${port}`));
});

