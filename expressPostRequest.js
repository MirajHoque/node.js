const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//body-parser->read data from the from body
//parses the data and attach it to the body
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use('/public', bodyParser.urlencoded({ extended: false }));
//bodyParser.urlencoded()->parse the text as url encoded data and exposed resulting object
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'));
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('successfully posted data');
});
app.listen(3000);