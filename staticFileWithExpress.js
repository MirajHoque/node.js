const express = require('express');
const path = require('path');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
//app.use('/alias for folder name',middleware function(path.join(js file directory,'folder name')))
//app.use->using middleware
//middleware->define how application responds to incoming request
//at first look into incoming request then make decision based on request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'styleColor.html'));
});
app.listen(3000);