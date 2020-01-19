const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.json', );
    res.writeHead(200, { 'content-type': 'application/json' });
    readStream.pipe(res);
    //res.writeHead(http status code,{content-type}:)
    //200->ok(request came and successful)

    //for image:
    //const readStream = fs.createReadStream('./static/quotes.jpg', );
    //res.writeHead(200, { 'content-type': 'image/jpg' });

    //for html:
    // const readStream = fs.createReadStream('./static/styleColor.html', );
    //res.writeHead(200, { 'content-type': 'text/html' });


}).listen('3000');