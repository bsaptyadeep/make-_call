const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app =express();

app.post('/voice', (req, res) => {
    const twiml = new VoiceResponse();
    twiml.say('Hello this is Saptyadeep Bhattacharjee. I can make your twilio Api call work using Node.js. Thank You for your time. Have a good day');
    res.type('test/xml');
    res.send(twiml.toString());
});

app.listen(1337);

