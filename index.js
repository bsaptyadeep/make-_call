// require('dotenv').config();
// const nodemailer= require('nodemailer');


// //step 1
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     }
// });


// //Step 2
// let mailOption ={
//     from: 'langdonrobert150@gmail.com ',
//     to: 'bsaptyadeep@gmail.com',
//     subject: 'testing Nodemailer',
//     text: 'Heyy! NodeMailer send u mail ...... check it out'
// }


// //Step 3
// transporter.sendMail(mailOption, function(err, data) {
//     if(err)
//     console.log('Error Occured', err);
//     else
//     console.log('Email Send sucessfully!!');
// })



require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var client = require('twilio')(accountSid, authToken);
console.log("Heloo!!!!!")
client.calls.create({
    twiml: '<Response><Say>Hello this is Saptyadeep Bhattacharjee. I can make your twilio Api call work using Node.js. Thank You for your time. Have a good day</Say></Response>',
    to: process.env.MY_PHONE_NUMBER,
    from: '+16812498641'
}, function(err, call) {
    if(err) {
        console.log(err)
    }
    else{
        console.log(call.sid);
    }
})
