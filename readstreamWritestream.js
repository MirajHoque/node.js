const fs = require('fs');
const readStream = fs.createReadStream('./paragraph.txt', 'utf8', );
//readStream uses a full buffer and load as a chunk
//readFile uses a buffer
const writeStream = fs.createWriteStream('myParagraph.txt')
readStream.on('data', (chunk) => {
    //console.log(chunk);
    //read the data from the file
    writeStream.write(chunk);
});