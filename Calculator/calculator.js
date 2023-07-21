const express = require('express');
const app = express();
const bodyParser = require('body-parser');
      
 app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
        let weight = +req.body.weight,
            height = +req.body.height;

        res.send(`Your BMI is ${weight/(height*height)}`)
    });

app.listen(3000, () => {
    console.log("Server works on port 3000");
});