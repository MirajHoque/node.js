const folder = require('fs');
/*
folder.mkdir('text file', (err) =>
    //mkdir('folder name',callback(err)
    {
        if (err)
            console.log(err);
        else
            folder.writeFile('./text file/sample.txt', 'Random numbers', (err) => {
                if (err)
                    console.log(err);
                else
                    console.log('File created inside folder');
            });
    });
*/

folder.rmdir('text file', (err) =>
    //rmdir() works if directory is empty
    {
        if (err)
            console.log(err)
        else
            console.log('Directory Removed');
    });