const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    console.log(req.body.cityName)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=5076046e5596696ff9f84ffb7eb6a0c4&units=metric`

    https.get(url, response => {
        response.on('data', chunk => {

            const apiResponse = JSON.parse(chunk)
            const temp = apiResponse.main.temp;;
            const weatherDisc = apiResponse.weather[0].description;
            const iconLink = `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`
            
            res.write(`<h1 style='color:orange'> The temperature in ${req.body.cityName} is ${temp}</h1>`);
            res.write(`<h2>${weatherDisc}</h2>`);
            res.write(`<img src="${iconLink}">`)
            res.send();
        })
    })
})

app.listen(3000, () => {
    console.log('The server is running on 3000')
})
