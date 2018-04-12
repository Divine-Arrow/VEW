var nodemailer = require('nodemailer');


/* code ninja */
var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
 
// create application/json parser
  var jsonParser = bodyParser.json()  
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/send', function(req, res) {
	res.render('/send', {qs: req.query});
}); 

// POST /login gets urlencoded bodies
app.post('/send', urlencodedParser, function (req, res) {
    console.log(req.body);

  /*if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)*/
})
 
// POST /api/users gets JSON bodies
/*app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})*/





/*let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'bs541156@gmail.com',
        pass: 'bhupenders225'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let HelperOptions = {
    from: '"Bhupender" <bs541156@gmail.com',
    to: 'bhupenders225@gmail.com',
    subject: 'dd',
    text: 'dd'
};



transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
});*/
