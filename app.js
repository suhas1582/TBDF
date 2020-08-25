const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

const app = new express();
const port = 3000;



mongoose.connect('mongodb://127.0.0.1:27017/intershalaguru', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, () => {
    console.log("DB CONNECTED");
})

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);


app.get("/", (req, res, next) => {
    res.json({
        "message": "Welcome to the home page of the website",
    })
})

app.listen(port, () => {
    console.log(`Server running absolutely fine on port ${port}`);
});
