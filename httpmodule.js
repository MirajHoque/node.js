const http = require('http');
//http module allows us to do create webserver
const server = http.createServer((req, res) =>
    //callback(request-object,response-object)
    {
        //res.write('Hello world from node js');
        //res.end();
        //res.end(send response back to the client)
        if (req.url === '/') {
            res.write('Hello world from Node js');
            res.end();
        } else {
            res.write('Using some other domain');
            res.end();
        }
    }
);
server.listen('3000');
//server.listen(port)->want port number listen for request