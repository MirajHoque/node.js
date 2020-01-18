const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('./compressedParagraph.gz/');
const writeStream = fs.createWriteStream('uncompressed.txt');
const gunzip = zlib.createGunzip();

readStream.pipe(gunzip).pipe(writeStream);