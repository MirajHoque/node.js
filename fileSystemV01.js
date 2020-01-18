//work with folder
const folder = require('fs');
folder.mkdir('newFolder', (err) => {
    if (err)
        console.log(err)
    else
        folder.rmdir('newFolder', (err) => {
            if (err)
                console.log(err);
            else
                console.log('successfully deleted the folder');
        });

});