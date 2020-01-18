const fs = require('fs');
const readStream = fs.createReadStream('./paragraph.txt', 'utf8');
const writeStream = fs.createWriteStream('paragraph2.txt');
readStream.pipe(writeStream);
//source.pipe(destination);
//pipe take source stream and send it to the destination stream