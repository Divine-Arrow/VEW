const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// public/static folder
app.use('/enquiry', express.static(path.join(__dirname, 'enquiry')));


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('enquiry');
});

app.post('/send', function(req, res) {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.fullName}</li>
      <li>Mail-id: ${req.body.mailId}</li>
      <li>Address: ${req.body.address}</li>
      <li>City: ${req.body.city}</li>
      <li>State: ${req.body.state}</li>
      <li>Country: ${req.body.country}</li>
      <li>Zip-Code: ${req.body.zipCode}</li>
    </ul>
    <h3>Message</h3>
    <p> ${req.body.message}</p>`;

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
        to: 'bhupenders225@gmail.com', /* for more use with , userExample@example.com' */
        subject: 'Harish works website ✔', // Subject line
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

        res.render('enquiry', {msg:'Email has been sent'});
    });


});

app.listen(3000, () => console.log('server started...'));