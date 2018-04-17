const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('hbs');
const path = require('path');
const nodemailer = require('nodemailer');


const port = process.env.PORT || 3000;
const app = express();

// View engine setup
exphbs.registerPartials(__dirname + '/views');
app.set('view engine', 'hbs');


// public/static folder
app.use('/public', express.static('public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


/* get */

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/enquiry', (req, res) => {
    res.render('enquiry');
});

app.get('/work_holding_chucks', (req, res) => {
    res.render('work_holding_chucks');
});

app.get('/pipeThreding', (req, res) => {
    res.render('pipe threding');
});

/* post */

app.post('/', function (req, res) {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.userName}</li>
      <li>Mail-id: ${req.body.userid}</li>
      <li>Phone Number: ${req.body.userNumber}</li>
      <li>Address: ${req.body.userAdress}</li>
    </ul>
    <h3>Message</h3>
    <p> ${req.body.userMessage}</p>`;

    // Nodemailer

    // copied
    /* // use this when hosting is got  this + mailoption + sendmail
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
    */

    // old builded

    let transporter = nodemailer.createTransport({
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

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"NodeMailer Contact" <bs541156@gmail.com>', // sender address
        to: 'bhupenders225@gmail.com',
        /* for more use with , userExample@example.com' */
        subject: 'Harish works website', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index', {
            msg: 'Email has been sent'
        });
    });


});

app.post('/enquiry', function (req, res) {
    const output = `
    </style>
    <p>You have a new enquiry request</p>
    <h3 style="color: black; font-weight: 600; font-size: 25px;">Contact Details</h3>
    <ul>  
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Name: ${req.body.fullName}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Mail-id: ${req.body.mailId}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Address: ${req.body.address}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Phone number: ${req.body.phoneNumber}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">City: ${req.body.city}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">State: ${req.body.state}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Country: ${req.body.country}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Zip-Code: ${req.body.zipCode}</li>
      <li style="font-size:20px;margin:10px 0px;color:#383838;font-weight: 600;">Message: ${req.body.message}</li>
    </ul>`;

    // Nodemailer

    // copied
    /* // use this when hosting is got  this + mailoption + sendmail
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
    */

    // old builded

    let transporter = nodemailer.createTransport({
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

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"NodeMailer Contact" <bs541156@gmail.com>', // sender address
        to: 'bhupenders225@gmail.com',
        /* for more use with , userExample@example.com' */
        subject: 'Harish works website', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('enquiry', {
            msg: 'Email has been sent'
        });
    });


});

app.listen(port, () => {
    console.log("Started...");
});


/* https://salty-inlet-59852.herokuapp.com/ */
