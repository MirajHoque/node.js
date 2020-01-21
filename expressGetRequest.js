const express = require('express');
const app = express();
app.get('/', (req, res) => {
    //app.get(route->refer to index route or home page)
    res.send('Hello world');
});
app.get('/example', (req, res) => {
        res.send('Hitting example route');
    })
    //route parameter
app.get('/example/:he/:she', (req, res) =>
    //route parameter use when we have that data
    {
        console.log(req.params);
        //req.params is an object
        console.log(req.query);
        //query use as optional setting



        res.send(req.params.he + ":" + req.params.she);
    })

//query string parameter
app.listen('3000');