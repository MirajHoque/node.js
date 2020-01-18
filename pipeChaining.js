const fs = require('fs');
const zlib = require('zlib')
    //zlib module for compress
const readStream = fs.createReadStream('./paragraph.txt', 'utf8');
const writeStream = fs.createWriteStream('compressedParagraph.gz');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
//take read stream(paragraph.txt) read it then compress it(gzip) then write it into write stream()