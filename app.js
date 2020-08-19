const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res, next) => {
    res.json({
        "message": "Welcome to the home page of the website",
    })
})

app.listen(port, () => {
    console.log(`Server running absolutely fine on port ${port}`);
});
