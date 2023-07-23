const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('pablic'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', (req, res) => {
    
    let firstName = req.body.FN,
        lastName = req.body.LN,
        email = req.body.Email;

    let data = {
        members: [
            {
                email_address: email,
                status: 'subscribed', 
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data)
    let url = `https://us21.api.mailchimp.com/3.0/lists/9df52ae462`,
        options = {
            method: 'POST',
            auth: 'Artem:09b75471455a0b065e0e34e4b1118a2e-us21'
        };
    // APi key 09b75471455a0b065e0e34e4b1118a2e-us21
    // id 9df52ae462
   
    const request = https.request(url, options, (respons) => {        
        if (respons.statusCode === 200) {
            res.sendFile(__dirname + '/success.html')
        } else {
            res.sendFile(__dirname + '/failure.html')
        }
        respons.on("data", (data) => {
          // console.log(JSON.parse(data))
        });
    });

    request.write(jsonData);
    request.end();
})

app.post('/failure', (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('The server is running on the 3000 port')
})